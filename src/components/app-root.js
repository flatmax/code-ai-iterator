import { LitElement, html, css } from 'lit';
import Split from 'split.js';
import { createPatch } from 'diff';
import './file-explorer.js';
import './enhanced-editor.js';

export class AppRoot extends LitElement {
    static properties = {
        leftFile: { type: Object },
        rightFile: { type: Object },
        diffMode: { type: Boolean },
        syncScroll: { type: Boolean }
    };

    static styles = css`
        :host {
            display: block;
            height: 100vh;
            width: 100vw;
            background: #1e1e1e;
            color: #d4d4d4;
        }
        .container {
            display: flex;
            height: 100%;
        }
        .file-explorer {
            width: 300px;
            background: #1e1e1e;
            border-right: 1px solid #3c3c3c;
            overflow: auto;
        }
        .editor-container {
            flex: 1;
            display: flex;
            background: #1e1e1e;
        }
        .editor {
            width: 100%;
            height: 100%;
            background: #1e1e1e;
        }
        .toolbar {
            position: fixed;
            top: 10px;
            right: 10px;
            background: #2d2d2d;
            padding: 8px;
            border-radius: 4px;
            display: flex;
            gap: 8px;
            z-index: 1000;
        }
        mwc-button {
            --mdc-theme-primary: #007acc;
            --mdc-theme-on-primary: #ffffff;
        }
        .gutter {
            background-color: #3c3c3c;
            background-repeat: no-repeat;
            background-position: 50%;
        }
        .gutter.gutter-horizontal {
            cursor: col-resize;
            background-image: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAUAAAAeCAYAAADkftS9AAAAIklEQVQoU2M4c+bMfxAGAgYYmwGrIIiDjrELjpo5aiZeMwF+yNnOs5KSvgAAAABJRU5ErkJggg==');
        }
    `;

    constructor() {
        super();
        this.leftFile = null;
        this.rightFile = null;
        this.diffMode = false;
        this.syncScroll = false;
    }

    firstUpdated() {
        const container = this.shadowRoot.querySelector('.editor-container');
        Split(container.children, {
            sizes: [50, 50],
            minSize: 100,
            gutterSize: 10,
            cursor: 'col-resize'
        });

        this.addEventListener('file-selected', this.handleFileSelected);
        this.addEventListener('editor-scroll', this.handleEditorScroll);
    }

    handleEditorScroll(event) {
        if (!this.syncScroll) return;

        const { scrollTop, scrollHeight, clientHeight } = event.detail;
        const ratio = scrollTop / (scrollHeight - clientHeight);

        // Dispatch scroll event to both editors
        const editors = this.shadowRoot.querySelectorAll('enhanced-editor');
        editors.forEach(editor => {
            if (event.target !== editor) {
                editor.dispatchEvent(new CustomEvent('sync-scroll', {
                    detail: { ratio, source: event.target }
                }));
            }
        });
    }

    async handleFileSelected(event) {
        const { path, name, content } = event.detail;
        
        const fileData = {
            name,
            path,
            content,
            language: name.split('.').pop() || ''
        };

        if (!this.leftFile) {
            this.leftFile = fileData;
        } else if (!this.rightFile) {
            this.rightFile = fileData;
        } else {
            this.leftFile = fileData;
        }

        if (this.diffMode && this.leftFile && this.rightFile) {
            this.updateDiff();
        }
    }

    async handleContentChanged(side, event) {
        const { content, filename } = event.detail;
        const file = side === 'left' ? this.leftFile : this.rightFile;
        
        if (!file) return;

        try {
            const response = await fetch('http://localhost:3001/api/files/save', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    path: file.path,
                    content: content
                })
            });

            if (!response.ok) throw new Error('Failed to save file');

            if (side === 'left') {
                this.leftFile = { ...this.leftFile, content };
            } else {
                this.rightFile = { ...this.rightFile, content };
            }

            if (this.diffMode) {
                this.updateDiff();
            }
        } catch (error) {
            console.error('Error saving file:', error);
        }
    }

    updateDiff() {
        if (!this.leftFile || !this.rightFile) return;

        const patch = createPatch(
            this.leftFile.name,
            this.leftFile.content || '',
            this.rightFile.content || '',
            'Original',
            'Modified'
        );

        // Update the right editor with the diff
        const rightEditor = this.shadowRoot.querySelector('enhanced-editor[side="right"]');
        if (rightEditor) {
            rightEditor.content = patch;
            rightEditor.language = 'diff';
            rightEditor.readOnly = true;
        }
    }

    toggleDiffMode() {
        this.diffMode = !this.diffMode;
        if (this.diffMode && this.leftFile && this.rightFile) {
            this.updateDiff();
        } else if (!this.diffMode && this.rightFile) {
            const rightEditor = this.shadowRoot.querySelector('enhanced-editor[side="right"]');
            if (rightEditor) {
                rightEditor.content = this.rightFile.content;
                rightEditor.language = this.rightFile.language;
                rightEditor.readOnly = false;
            }
        }
    }

    toggleSyncScroll() {
        this.syncScroll = !this.syncScroll;
    }

    render() {
        return html`
            <div class="toolbar">
                <mwc-button
                    raised
                    ?disabled=${!this.leftFile || !this.rightFile}
                    @click=${this.toggleDiffMode}
                >
                    ${this.diffMode ? 'Exit Diff' : 'Show Diff'}
                </mwc-button>
                <mwc-button
                    raised
                    ?disabled=${!this.leftFile || !this.rightFile}
                    @click=${this.toggleSyncScroll}
                >
                    ${this.syncScroll ? 'Disable Sync Scroll' : 'Enable Sync Scroll'}
                </mwc-button>
            </div>
            <div class="container">
                <div class="file-explorer">
                    <file-explorer></file-explorer>
                </div>
                <div class="editor-container">
                    <div class="editor">
                        <enhanced-editor
                            side="left"
                            .content=${this.leftFile?.content || ''}
                            .filename=${this.leftFile?.name || ''}
                            .language=${this.leftFile?.language || ''}
                            .syncScroll=${this.syncScroll}
                            @content-changed=${(e) => this.handleContentChanged('left', e)}
                        ></enhanced-editor>
                    </div>
                    <div class="editor">
                        <enhanced-editor
                            side="right"
                            .content=${this.rightFile?.content || ''}
                            .filename=${this.rightFile?.name || ''}
                            .language=${this.rightFile?.language || ''}
                            .syncScroll=${this.syncScroll}
                            .readOnly=${this.diffMode}
                            @content-changed=${(e) => this.handleContentChanged('right', e)}
                        ></enhanced-editor>
                    </div>
                </div>
            </div>
        `;
    }
}

customElements.define('app-root', AppRoot);
