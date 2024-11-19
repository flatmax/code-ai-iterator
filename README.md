# Code AI Iterator

A modern web-based collaborative code exploration and editing tool with advanced file management and merge editing capabilities.

## Features

- 🗂️ File Explorer with real-time file system navigation
- ✨ Dual-pane code editor with syntax highlighting
- 🔄 Real-time merge view highlighting
- 📝 Live file editing and saving
- 🎨 Modern Material Design UI components
- 🌓 Dark theme support
- 🔍 Side-by-side code comparison
- 🔄 Synchronized scrolling between editors

## Technology Stack

- **Frontend**
  - Web Components (LitElement)
  - CodeMirror 6 for code editing
  - Material Web Components
  - Split.js for resizable panes
  - diff library for code comparison

- **Backend**
  - Express.js
  - Node.js File System API
  - CORS enabled

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm (v6 or higher)

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
npm run dev
```

This will start both the backend server (port 3001) and the frontend development server.

## Development

The project uses the following structure:
```
code-ai-iterator/
├── src/
│   ├── components/
│   │   ├── app-root.js        # Main application component
│   │   ├── enhanced-editor.js # CodeMirror editor wrapper
│   │   └── file-explorer.js   # File system navigation
│   └── index.html
├── server.js                  # Express backend server
├── package.json
└── README.md
```

### Key Components

- **app-root**: Main application component managing the overall layout and state
- **enhanced-editor**: Custom CodeMirror 6 editor with merge highlighting
- **file-explorer**: File system navigation component

### Features in Detail

#### Merge View Highlighting
- Real-time diff visualization
- Green highlights for additions (right pane)
- Red highlights for deletions (left pane)
- Synchronized scrolling option

#### File Management
- File system navigation
- File creation and deletion
- Real-time file saving
- Automatic syntax highlighting based on file type

## Scripts

- `npm run dev`: Start both frontend and backend in development mode
- `npm start`: Start the production server
- `npm run client`: Start only the frontend development server
- `npm run server`: Start only the backend server

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.
