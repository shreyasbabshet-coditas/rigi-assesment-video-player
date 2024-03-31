# Video Player App

## Overview

This project is a Video Player App built using React and TypeScript. It allows users to play videos, manage a playlist, and interact with draggable video components.

### Components

- **Playlist**: Displays a list of videos that users can play. Users can drag and drop videos to rearrange the playlist.
- **VideoPlayer**: Renders the selected video and provides playback controls.
- **DragableVideo**: A draggable video component that users can drag and drop within the playlist.

## Running the App

To run the Video Player App locally, follow these steps:

1. Clone this repository to your local machine.

2. Navigate to the project directory:

   ```bash
   cd video-player-app
   npm install
   npm run dev
   ```

## Project Structure

```
video-player-app/
├── public/ # Public assets and HTML template
├── src/ # Source files
│ ├── components/ # React components
│ ├── styles/ # CSS or SCSS styles
│ ├── App.tsx # Main application component
│ ├── App.state.tsx # File having context and reducer
│ └── index.tsx # Entry point for the application
├── package.json # NPM package configuration
└── README.md # Project documentation
```
