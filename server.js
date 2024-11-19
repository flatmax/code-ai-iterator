const express = require('express');
const fs = require('fs').promises;
const path = require('path');
const cors = require('cors');
const { execFile } = require('child_process');
const util = require('util');
const execFilePromise = util.promisify(execFile);

const app = express();
const PORT = 3001;

app.use(cors());
// Increase JSON payload limit to 50mb
app.use(express.json({limit: '50mb'}));
// Increase URL-encoded payload limit to 50mb
app.use(express.urlencoded({limit: '50mb', extended: true}));

// Helper function to get file type from git
async function getFileType(filePath) {
    try {
        const { stdout } = await execFilePromise('file', ['-b', '--mime-type', filePath]);
        return stdout.trim();
    } catch (error) {
        console.error('Error getting file type:', error);
        return 'application/octet-stream';
    }
}

// Helper function to get git status
async function getGitStatus(filePath) {
    try {
        const { stdout } = await execFilePromise('git', ['status', '--porcelain', filePath]);
        if (!stdout) return 'unchanged';
        const status = stdout.substring(0, 2).trim();
        switch (status) {
            case 'M': return 'modified';
            case 'A': return 'added';
            case 'D': return 'deleted';
            case '??': return 'untracked';
            default: return 'unchanged';
        }
    } catch (error) {
        console.error('Error getting git status:', error);
        return 'unknown';
    }
}

// Get directory contents with enhanced metadata
app.get('/api/files', async (req, res) => {
    try {
        const dirPath = req.query.path || '.';
        const contents = await fs.readdir(path.resolve(dirPath), { withFileTypes: true });
        
        const filesPromises = contents.map(async (item) => {
            const fullPath = path.join(dirPath, item.name);
            const stats = await fs.stat(path.resolve(fullPath));
            
            const fileInfo = {
                name: item.name,
                type: item.isDirectory() ? 'directory' : 'file',
                path: fullPath,
                size: stats.size,
                modified: stats.mtime,
                created: stats.birthtime,
                mode: stats.mode,
                gitStatus: 'unknown'
            };

            if (item.isFile()) {
                fileInfo.mimeType = await getFileType(path.resolve(fullPath));
                fileInfo.gitStatus = await getGitStatus(path.resolve(fullPath));
            }

            return fileInfo;
        });

        const files = await Promise.all(filesPromises);
        res.json(files);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// Get file contents with metadata
app.get('/api/files/content', async (req, res) => {
    try {
        const filePath = req.query.path;
        if (!filePath) {
            return res.status(400).json({ error: 'File path is required' });
        }

        const resolvedPath = path.resolve(filePath);
        const [content, stats, mimeType, gitStatus] = await Promise.all([
            fs.readFile(resolvedPath, 'utf-8'),
            fs.stat(resolvedPath),
            getFileType(resolvedPath),
            getGitStatus(resolvedPath)
        ]);

        res.json({
            content,
            size: stats.size,
            modified: stats.mtime,
            created: stats.birthtime,
            mimeType,
            gitStatus
        });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// Save file contents
app.post('/api/files/save', async (req, res) => {
    try {
        const { path: filePath, content } = req.body;
        if (!filePath || content === undefined) {
            return res.status(400).json({ error: 'File path and content are required' });
        }

        const resolvedPath = path.resolve(filePath);
        await fs.writeFile(resolvedPath, content, 'utf-8');
        
        // Get updated file metadata
        const [stats, mimeType, gitStatus] = await Promise.all([
            fs.stat(resolvedPath),
            getFileType(resolvedPath),
            getGitStatus(resolvedPath)
        ]);

        res.json({
            success: true,
            size: stats.size,
            modified: stats.mtime,
            created: stats.birthtime,
            mimeType,
            gitStatus
        });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// Create new directory
app.post('/api/directory', async (req, res) => {
    try {
        const { path: dirPath } = req.body;
        if (!dirPath) {
            return res.status(400).json({ error: 'Directory path is required' });
        }

        await fs.mkdir(path.resolve(dirPath), { recursive: true });
        res.json({ success: true });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// Delete file or directory
app.delete('/api/files', async (req, res) => {
    try {
        const { path: targetPath } = req.body;
        if (!targetPath) {
            return res.status(400).json({ error: 'Path is required' });
        }

        const resolvedPath = path.resolve(targetPath);
        const stats = await fs.stat(resolvedPath);
        
        if (stats.isDirectory()) {
            await fs.rmdir(resolvedPath, { recursive: true });
        } else {
            await fs.unlink(resolvedPath);
        }
        
        res.json({ success: true });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// Rename file or directory
app.put('/api/files/rename', async (req, res) => {
    try {
        const { oldPath, newPath } = req.body;
        if (!oldPath || !newPath) {
            return res.status(400).json({ error: 'Both old and new paths are required' });
        }

        await fs.rename(path.resolve(oldPath), path.resolve(newPath));
        res.json({ success: true });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// Search files
app.get('/api/files/search', async (req, res) => {
    try {
        const { query, path: searchPath } = req.query;
        if (!query) {
            return res.status(400).json({ error: 'Search query is required' });
        }

        const results = [];
        async function searchDirectory(dirPath) {
            const contents = await fs.readdir(dirPath, { withFileTypes: true });
            
            for (const item of contents) {
                const fullPath = path.join(dirPath, item.name);
                
                if (item.isDirectory()) {
                    await searchDirectory(fullPath);
                } else if (item.name.toLowerCase().includes(query.toLowerCase())) {
                    const stats = await fs.stat(fullPath);
                    results.push({
                        name: item.name,
                        path: fullPath,
                        size: stats.size,
                        modified: stats.mtime
                    });
                }
            }
        }

        await searchDirectory(path.resolve(searchPath || '.'));
        res.json(results);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
