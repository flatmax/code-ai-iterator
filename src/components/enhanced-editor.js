import { LitElement, html, css } from 'lit';
import { EditorView } from '@codemirror/view';
import { EditorState } from '@codemirror/state';
import { javascript } from '@codemirror/lang-javascript';
import { html as htmlLang } from '@codemirror/lang-html';
import { css as cssLang } from '@codemirror/lang-css';
import { json } from '@codemirror/lang-json';
import { markdown } from '@codemirror/lang-markdown';
import { oneDark } from '@codemirror/theme-one-dark';
import { ViewPlugin } from '@codemirror/view';
import { lineNumbers, highlightActiveLineGutter, highlightSpecialChars, drawSelection, 
         dropCursor, rectangularSelection, crosshairCursor, highlightActiveLine, 
         keymap } from "@codemirror/view";
import { foldGutter, indentOnInput, syntaxHighlighting, defaultHighlightStyle, 
         bracketMatching, foldKeymap } from "@codemirror/language";
import { history, defaultKeymap, historyKeymap } from "@codemirror/commands";
import { autocompletion, closeBrackets } from "@codemirror/autocomplete";

export class EnhancedEditor extends LitElement {
    static properties = {
        content: { type: String },
        filename: { type: String },
        language: { type: String },
        syncScroll: { type: Boolean },
        readOnly: { type: Boolean }
    };

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
            closeBrackets(),
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
            EditorState.readOnly.of(this.readOnly)
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

    updated(changedProperties) {
        if (changedProperties.has('content') && this.editor && this.content !== this.editor.state.doc.toString()) {
            this.editor.dispatch({
                changes: {
                    from: 0,
                    to: this.editor.state.doc.length,
                    insert: this.content
                }
            });
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
