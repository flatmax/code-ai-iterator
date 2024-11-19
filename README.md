# Code AI Iterator

A web-based collaborative code exploration and editing tool with advanced file management capabilities.

## Features

### File Explorer
- Advanced file browsing and management
- File type detection with appropriate icons
- Sorting capabilities
- Search and filter functionality
- Loading indicators
- Dark-themed UI

### Editor
- Split-pane interface
- Syntax highlighting for multiple languages
- Synchronized scrolling
- Diff view comparison
- Code folding
- Auto-completion
- Auto-closing brackets
- Line numbers
- Active line highlighting

## Technology Stack

### Frontend
- Web Components (LitElement)
- CodeMirror 6 for code editing
- Material Web Components
- Split.js for split panes
- Dark theme (One Dark)

### Backend
- Express.js
- CORS enabled

## Getting Started

### Prerequisites
- Node.js (Latest LTS version recommended)
- npm

### Installation

1. Clone the repository:
```bash
git clone [repository-url]
cd code-ai-iterator
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm start
```

This will start both the backend server and the frontend development server concurrently.
- Backend: http://localhost:3001
- Frontend: http://localhost:8000

## Development

The project uses the following development tools:
- @web/dev-server for frontend development
- concurrently for running multiple servers

## Project Structure

```
code-ai-iterator/
├── src/
│   └── components/
│       ├── app-root.js        # Main application component
│       ├── file-explorer.js   # File browsing component
│       ├── code-editor.js     # Code editor wrapper
│       └── enhanced-editor.js # Extended CodeMirror editor
├── server.js                  # Express backend server
├── index.html                 # Main HTML entry
└── package.json              # Project dependencies
```

## Future Improvements

1. User Authentication
2. Enhanced File Operations
3. Plugin Architecture
4. Performance Optimization
5. Comprehensive Error Handling

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is licensed under the MIT License - see the LICENSE file for details.
