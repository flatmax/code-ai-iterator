import { LitElement, html, css } from 'lit';
import '@material/mwc-list/mwc-list.js';
import '@material/mwc-list/mwc-list-item.js';
import '@material/mwc-icon/mwc-icon.js';
import '@material/mwc-textfield/mwc-textfield.js';
import '@material/mwc-select/mwc-select.js';
import '@material/mwc-list/mwc-check-list-item.js';

export class FileExplorer extends LitElement {
    static properties = {
        currentPath: { type: String },
        files: { type: Array },
        filteredFiles: { type: Array },
        sortOrder: { type: String },
        filterText: { type: String },
        selectedTypes: { type: Array },
        loading: { type: Boolean }
    };

    static styles = css`
        :host {
            display: block;
            height: 100%;
            background: #1e1e1e;
            color: #d4d4d4;
        }
        .explorer-container {
            display: flex;
            flex-direction: column;
            height: 100%;
        }
        .path-header {
            padding: 8px;
            background: #252526;
            border-bottom: 1px solid #3c3c3c;
            display: flex;
            align-items: center;
            gap: 8px;
        }
        .path-header mwc-icon {
            cursor: pointer;
            color: #d4d4d4;
        }
        .path-header mwc-icon:hover {
            color: #ffffff;
        }
        .controls {
            padding: 8px;
            background: #252526;
            border-bottom: 1px solid #3c3c3c;
        }
        .search-box {
            margin-bottom: 8px;
            width: 100%;
            --mdc-theme-primary: #007acc;
            --mdc-text-field-fill-color: #3c3c3c;
            --mdc-text-field-ink-color: #d4d4d4;
            --mdc-text-field-label-ink-color: #d4d4d4;
        }
        .sort-select {
            width: 100%;
            margin-bottom: 8px;
            --mdc-theme-primary: #007acc;
            --mdc-select-fill-color: #3c3c3c;
            --mdc-select-ink-color: #d4d4d4;
            --mdc-select-label-ink-color: #d4d4d4;
            --mdc-select-dropdown-icon-color: #d4d4d4;
        }
        .file-list {
            flex: 1;
            overflow: auto;
        }
        mwc-list-item {
            --mdc-theme-primary: #d4d4d4;
            --mdc-theme-text-primary-on-background: #d4d4d4;
        }
        mwc-list-item:hover {
            background: #2a2d2e;
        }
        .file-item {
            display: flex;
            align-items: center;
            gap: 8px;
        }
        .file-icon {
            width: 20px;
            height: 20px;
        }
        .file-info {
            display: flex;
            flex-direction: column;
        }
        .file-name {
            font-size: 14px;
        }
        .file-meta {
            font-size: 12px;
            color: #858585;
        }
        .loading-overlay {
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            background: rgba(30, 30, 30, 0.7);
            display: flex;
            justify-content: center;
            align-items: center;
            z-index: 1000;
        }
        .loading-spinner {
            border: 3px solid #3c3c3c;
            border-top: 3px solid #007acc;
            border-radius: 50%;
            width: 24px;
            height: 24px;
            animation: spin 1s linear infinite;
        }
        @keyframes spin {
            0% { transform: rotate(0deg); }
            100% { transform: rotate(360deg); }
        }
        .type-filter {
            display: flex;
            gap: 8px;
            flex-wrap: wrap;
            padding: 8px;
            background: #252526;
            border-bottom: 1px solid #3c3c3c;
        }
        .type-chip {
            padding: 4px 8px;
            border-radius: 12px;
            background: #3c3c3c;
            font-size: 12px;
            cursor: pointer;
            user-select: none;
        }
        .type-chip.selected {
            background: #007acc;
        }
    `;

    constructor() {
        super();
        this.currentPath = '';
        this.files = [];
        this.filteredFiles = [];
        this.sortOrder = 'name-asc';
        this.filterText = '';
        this.selectedTypes = [];
        this.loading = false;
        this.fileTypes = new Set();
    }

    async connectedCallback() {
        super.connectedCallback();
        await this.loadFiles();
    }

    getFileIcon(file) {
        if (file.type === 'directory') return 'folder';
        
        const ext = file.name.split('.').pop()?.toLowerCase();
        switch (ext) {
            case 'js': return 'code';
            case 'jsx': return 'code';
            case 'ts': return 'code';
            case 'tsx': return 'code';
            case 'html': return 'html';
            case 'css': return 'style';
            case 'scss': 
            case 'sass': return 'style';
            case 'json': return 'data_object';
            case 'md': return 'description';
            case 'txt': return 'article';
            case 'png':
            case 'jpg':
            case 'jpeg':
            case 'gif': 
            case 'svg': return 'image';
            case 'pdf': return 'picture_as_pdf';
            case 'zip':
            case 'tar':
            case 'gz': return 'folder_zip';
            case 'mp3':
            case 'wav':
            case 'ogg': return 'audio_file';
            case 'mp4':
            case 'avi':
            case 'mov': return 'video_file';
            case 'gitignore':
            case 'git': return 'source_control';
            default: return 'insert_drive_file';
        }
    }

    getFileSize(size) {
        const units = ['B', 'KB', 'MB', 'GB'];
        let index = 0;
        while (size >= 1024 && index < units.length - 1) {
            size /= 1024;
            index++;
        }
        return `${size.toFixed(1)} ${units[index]}`;
    }

    async loadFiles() {
        this.loading = true;
        try {
            const response = await fetch(`http://localhost:3001/api/files?path=${encodeURIComponent(this.currentPath || '.')}`);
            if (!response.ok) throw new Error('Failed to load files');
            this.files = await response.json();
            
            // Update file types
            this.fileTypes = new Set(
                this.files
                    .filter(f => f.type === 'file')
                    .map(f => f.name.split('.').pop()?.toLowerCase())
                    .filter(Boolean)
            );
            
            this.updateFilteredFiles();
        } catch (error) {
            console.error('Error loading files:', error);
            // Fallback to mock data
            this.files = [
                { name: 'src', type: 'directory', size: 0, modified: new Date() },
                { name: 'package.json', type: 'file', size: 1024, modified: new Date() },
                { name: 'README.md', type: 'file', size: 512, modified: new Date() },
                { name: 'index.html', type: 'file', size: 2048, modified: new Date() }
            ];
            this.updateFilteredFiles();
        } finally {
            this.loading = false;
        }
    }

    updateFilteredFiles() {
        let filtered = [...this.files];

        // Apply text filter
        if (this.filterText) {
            const searchText = this.filterText.toLowerCase();
            filtered = filtered.filter(file => 
                file.name.toLowerCase().includes(searchText)
            );
        }

        // Apply type filter
        if (this.selectedTypes.length > 0) {
            filtered = filtered.filter(file => {
                if (file.type === 'directory') return true;
                const ext = file.name.split('.').pop()?.toLowerCase();
                return this.selectedTypes.includes(ext);
            });
        }

        // Apply sorting
        filtered.sort((a, b) => {
            // Directories always come first
            if (a.type !== b.type) {
                return a.type === 'directory' ? -1 : 1;
            }

            switch (this.sortOrder) {
                case 'name-asc':
                    return a.name.localeCompare(b.name);
                case 'name-desc':
                    return b.name.localeCompare(a.name);
                case 'size-asc':
                    return (a.size || 0) - (b.size || 0);
                case 'size-desc':
                    return (b.size || 0) - (a.size || 0);
                case 'modified-asc':
                    return new Date(a.modified) - new Date(b.modified);
                case 'modified-desc':
                    return new Date(b.modified) - new Date(a.modified);
                default:
                    return 0;
            }
        });

        this.filteredFiles = filtered;
    }

    handleFilterInput(e) {
        this.filterText = e.target.value;
        this.updateFilteredFiles();
    }

    handleSortChange(e) {
        this.sortOrder = e.target.value;
        this.updateFilteredFiles();
    }

    toggleTypeFilter(type) {
        if (this.selectedTypes.includes(type)) {
            this.selectedTypes = this.selectedTypes.filter(t => t !== type);
        } else {
            this.selectedTypes = [...this.selectedTypes, type];
        }
        this.updateFilteredFiles();
    }

    async handleFileClick(file) {
        if (file.type === 'directory') {
            this.currentPath = this.currentPath ? `${this.currentPath}/${file.name}` : file.name;
            await this.loadFiles();
        } else {
            try {
                const response = await fetch(`http://localhost:3001/api/files/content?path=${encodeURIComponent(file.path)}`);
                if (!response.ok) throw new Error('Failed to load file content');
                const { content } = await response.json();
                
                this.dispatchEvent(new CustomEvent('file-selected', {
                    detail: {
                        path: file.path,
                        name: file.name,
                        content,
                        size: file.size,
                        modified: file.modified
                    },
                    bubbles: true,
                    composed: true
                }));
            } catch (error) {
                console.error('Error loading file content:', error);
            }
        }
    }

    async handleBackClick() {
        if (!this.currentPath) return;
        
        const parts = this.currentPath.split('/');
        parts.pop();
        this.currentPath = parts.join('/');
        await this.loadFiles();
    }

    render() {
        return html`
            <div class="explorer-container">
                <div class="path-header">
                    ${this.currentPath ? html`
                        <mwc-icon @click=${this.handleBackClick}>arrow_back</mwc-icon>
                    ` : ''}
                    <div>${this.currentPath || '/'}</div>
                </div>
                
                <div class="controls">
                    <mwc-textfield
                        class="search-box"
                        label="Search files"
                        icon="search"
                        @input=${this.handleFilterInput}
                    ></mwc-textfield>
                    
                    <mwc-select
                        class="sort-select"
                        label="Sort by"
                        @selected=${this.handleSortChange}
                    >
                        <mwc-list-item value="name-asc" selected>Name (A-Z)</mwc-list-item>
                        <mwc-list-item value="name-desc">Name (Z-A)</mwc-list-item>
                        <mwc-list-item value="size-asc">Size (Smallest)</mwc-list-item>
                        <mwc-list-item value="size-desc">Size (Largest)</mwc-list-item>
                        <mwc-list-item value="modified-desc">Recently Modified</mwc-list-item>
                        <mwc-list-item value="modified-asc">Least Recently Modified</mwc-list-item>
                    </mwc-select>
                </div>

                <div class="type-filter">
                    ${[...this.fileTypes].map(type => html`
                        <div
                            class="type-chip ${this.selectedTypes.includes(type) ? 'selected' : ''}"
                            @click=${() => this.toggleTypeFilter(type)}
                        >
                            ${type}
                        </div>
                    `)}
                </div>

                <mwc-list class="file-list">
                    ${this.filteredFiles.map(file => html`
                        <mwc-list-item @click=${() => this.handleFileClick(file)}>
                            <div class="file-item">
                                <mwc-icon class="file-icon">
                                    ${this.getFileIcon(file)}
                                </mwc-icon>
                                <div class="file-info">
                                    <span class="file-name">${file.name}</span>
                                    ${file.type === 'file' ? html`
                                        <span class="file-meta">
                                            ${this.getFileSize(file.size)} • 
                                            ${new Date(file.modified).toLocaleDateString()}
                                        </span>
                                    ` : ''}
                                </div>
                            </div>
                        </mwc-list-item>
                    `)}
                </mwc-list>

                ${this.loading ? html`
                    <div class="loading-overlay">
                        <div class="loading-spinner"></div>
                    </div>
                ` : ''}
            </div>
        `;
    }
}

customElements.define('file-explorer', FileExplorer);
