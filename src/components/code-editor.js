import { LitElement, html, css } from 'lit';

export class CodeEditor extends LitElement {
    static properties = {
        content: { type: String },
        filename: { type: String },
        language: { type: String }
    };

    static styles = css`
        :host {
            display: block;
            height: 100%;
            position: relative;
        }
        .editor-header {
            padding: 8px;
            background: #eee;
            border-bottom: 1px solid #ddd;
            font-size: 0.9em;
            color: #666;
        }
        .editor-content {
            height: calc(100% - 40px);
            padding: 8px;
            font-family: monospace;
            white-space: pre-wrap;
            overflow: auto;
            tab-size: 4;
        }
        textarea {
            width: 100%;
            height: 100%;
            border: none;
            padding: 8px;
            font-family: monospace;
            resize: none;
            background: transparent;
            outline: none;
            tab-size: 4;
        }
    `;

    constructor() {
        super();
        this.content = '';
        this.filename = '';
        this.language = '';
    }

    handleInput(e) {
        this.content = e.target.value;
        this.dispatchEvent(new CustomEvent('content-changed', {
            detail: {
                content: this.content,
                filename: this.filename
            },
            bubbles: true,
            composed: true
        }));
    }

    render() {
        return html`
            <div class="editor-header">
                ${this.filename || 'Untitled'} ${this.language ? `(${this.language})` : ''}
            </div>
            <div class="editor-content">
                <textarea
                    .value=${this.content}
                    @input=${this.handleInput}
                    spellcheck="false"
                ></textarea>
            </div>
        `;
    }
}

customElements.define('code-editor', CodeEditor);
