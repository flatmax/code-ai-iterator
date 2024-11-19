import { LitElement, html, css } from 'lit';

// CodeMirror core
import { EditorView, ViewPlugin, Decoration } from '@codemirror/view';
import { EditorState, StateField, StateEffect } from '@codemirror/state';

// CodeMirror languages
import { javascript } from '@codemirror/lang-javascript';
import { html as htmlLang } from '@codemirror/lang-html';
import { css as cssLang } from '@codemirror/lang-css';
import { json } from '@codemirror/lang-json';
import { markdown } from '@codemirror/lang-markdown';

// CodeMirror theme
import { oneDark } from '@codemirror/theme-one-dark';

// CodeMirror view features
import { 
    lineNumbers, 
    highlightActiveLineGutter, 
    highlightSpecialChars, 
    drawSelection,
    dropCursor, 
    rectangularSelection, 
    crosshairCursor, 
    highlightActiveLine,
    keymap 
} from "@codemirror/view";

// CodeMirror language features
import { 
    foldGutter, 
    indentOnInput, 
    syntaxHighlighting, 
    defaultHighlightStyle,
    bracketMatching, 
    foldKeymap 
} from "@codemirror/language";

// CodeMirror commands
import { 
    history, 
    defaultKeymap, 
    historyKeymap 
} from "@codemirror/commands";

// CodeMirror completion
import { autocompletion } from "@codemirror/autocomplete";

export class EnhancedEditor extends LitElement {
    static properties = {
        content: { type: String },
        filename: { type: String },
        language: { type: String },
        syncScroll: { type: Boolean },
        readOnly: { type: Boolean }
    };

    static highlightEffect = StateEffect.define();

    static styles = css`
        :host {
            display: block;
            height: 100%;
        }
        .editor-header {
            padding: 8px;
            background: #2d2d2d;
            border-bottom: 1px solid #444;
            color: #fff;
            font-size: 0.9em;
            display: flex;
            justify-content: space-between;
            align-items: center;
        }
        .editor-content {
            height: calc(100% - 37px);
            overflow: hidden;
            position: relative;
        }
        .cm-editor {
            height: 100%;
        }
        .cm-editor .cm-scroller {
            font-family: 'Fira Code', monospace;
            line-height: 1.6;
        }
        .cm-editor .cm-content {
            white-space: pre-wrap;
            word-break: normal;
            word-wrap: break-word;
            padding: 8px 0;
        }
        .cm-merge-highlight-add {
            background-color: rgba(0, 255, 0, 0.2) !important;
            border-radius: 2px;
        }
        .cm-merge-highlight-delete {
            background-color: rgba(255, 0, 0, 0.2) !important;
            border-radius: 2px;
        }
        .cm-merge-highlight-change {
            background-color: rgba(255, 165, 0, 0.1) !important;
        }
        .gutter-marker {
            width: 8px;
            position: absolute;
            left: 0;
            height: 100%;
        }
        .gutter-marker.add {
            background-color: #28a745;
        }
        .gutter-marker.delete {
            background-color: #dc3545;
        }
        .gutter-marker.change {
            background-color: #ffc107;
        }
    `;

    constructor() {
        super();
        this.content = '';
        this.filename = '';
        this.language = '';
        this.syncScroll = false;
        this.readOnly = false;
        this.editor = null;
        this.scrollPlugin = null;
        this.side = '';  // 'left' or 'right'
        this.diffDecorations = [];
    }

    getLanguage(filename) {
        const ext = filename.split('.').pop()?.toLowerCase();
        switch (ext) {
            case 'js': return javascript();
            case 'jsx': return javascript();
            case 'ts': return javascript();
            case 'tsx': return javascript();
            case 'html': return htmlLang();
            case 'css': return cssLang();
            case 'scss': return cssLang();
            case 'sass': return cssLang();
            case 'json': return json();
            case 'md': return markdown();
            default: return javascript();
        }
    }

    createScrollPlugin() {
        return ViewPlugin.fromClass(class {
            update(update) {
                if (update.docChanged || update.viewportChanged) {
                    const event = new CustomEvent('editor-scroll', {
                        detail: {
                            scrollTop: update.view.scrollDOM.scrollTop,
                            scrollHeight: update.view.scrollDOM.scrollHeight,
                            clientHeight: update.view.scrollDOM.clientHeight
                        },
                        bubbles: true,
                        composed: true
                    });
                    update.view.dom.dispatchEvent(event);
                }
            }
        });
    }

    createMergeHighlightExtension() {
        return [
            StateField.define({
                create() {
                    return Decoration.none;
                },
                update(decorations, tr) {
                    decorations = decorations.map(tr.changes);
                    
                    for (let e of tr.effects) {
                        if (e.is(EnhancedEditor.highlightEffect)) {
                            decorations = e.value;
                        }
                    }
                    
                    return decorations;
                },
                provide: f => EditorView.decorations.from(f)
            })
        ];
    }

    updateMergeHighlights(diffs) {
        if (!this.editor) return;

        const decorations = [];
        let pos = 0;

        diffs.forEach(diff => {
            const text = diff.value;
            if (!text) return;

            const lines = text.split('\n');
            const totalLength = text.length;

            if (diff.added && this.side === 'right') {
                // Highlight added content in right editor
                decorations.push(Decoration.mark({
                    class: 'cm-merge-highlight-add'
                }).range(pos, pos + totalLength));
            } else if (diff.removed && this.side === 'left') {
                // Highlight removed content in left editor
                decorations.push(Decoration.mark({
                    class: 'cm-merge-highlight-delete'
                }).range(pos, pos + totalLength));
            }

            // Only advance position for content that should be counted
            // in the current editor's position calculation
            if ((this.side === 'left' && !diff.added) ||
                (this.side === 'right' && !diff.removed)) {
                pos += totalLength;
            }
        });

        // Apply the decorations using our effect
        this.editor.dispatch({
            effects: EnhancedEditor.highlightEffect.of(Decoration.set(decorations, true))
        });
    }

    firstUpdated() {
        const baseExtensions = [
            lineNumbers(),
            highlightActiveLineGutter(),
            highlightSpecialChars(),
            history(),
            foldGutter(),
            drawSelection(),
            dropCursor(),
            EditorState.allowMultipleSelections.of(true),
            indentOnInput(),
            syntaxHighlighting(defaultHighlightStyle, { fallback: true }),
            bracketMatching(),
            autocompletion(),
            rectangularSelection(),
            crosshairCursor(),
            highlightActiveLine(),
            keymap.of([
                ...defaultKeymap,
                ...historyKeymap,
                ...foldKeymap,
            ]),
            oneDark,
            this.getLanguage(this.filename),
            EditorView.updateListener.of(update => {
                if (update.docChanged) {
                    const content = update.state.doc.toString();
                    this.dispatchEvent(new CustomEvent('content-changed', {
                        detail: { content, filename: this.filename },
                        bubbles: true,
                        composed: true
                    }));
                }
            }),
            EditorState.readOnly.of(this.readOnly),
            ...this.createMergeHighlightExtension()
        ];

        if (this.syncScroll) {
            this.scrollPlugin = this.createScrollPlugin();
            baseExtensions.push(this.scrollPlugin);
        }

        const state = EditorState.create({
            doc: this.content,
            extensions: baseExtensions
        });

        this.editor = new EditorView({
            state,
            parent: this.shadowRoot.querySelector('.editor-content')
        });

        if (this.syncScroll) {
            this.addEventListener('sync-scroll', (e) => {
                if (e.detail.source !== this) {
                    const scrollDOM = this.editor.scrollDOM;
                    const ratio = e.detail.ratio;
                    scrollDOM.scrollTop = ratio * (scrollDOM.scrollHeight - scrollDOM.clientHeight);
                }
            });
        }
    }

    updated(changedProps) {
        super.updated(changedProps);
        if (changedProps.has('content') && this.editor) {
            const content = this.content || '';
            const currentContent = this.editor.state.doc.toString();
            
            if (content !== currentContent) {
                this.editor.dispatch({
                    changes: {
                        from: 0,
                        to: currentContent.length,
                        insert: content
                    }
                });
                
                // Notify parent of content change
                this.dispatchEvent(new CustomEvent('content-changed', {
                    detail: { content, filename: this.filename },
                    bubbles: true,
                    composed: true
                }));
            }
        }
    }

    render() {
        return html`
            <div class="editor-header">
                <div>${this.filename || 'Untitled'}</div>
                <div>${this.language}</div>
            </div>
            <div class="editor-content"></div>
        `;
    }
}

customElements.define('enhanced-editor', EnhancedEditor);
