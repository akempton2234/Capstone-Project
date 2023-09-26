import { createRoot } from 'react-dom/client';
import App from './components/App.jsx';
import '../src/style/index.css';
import React from 'react';

// Get the root container element with the id 'root' from the HTML
const root = document.getElementById('root');

// Create a root for rendering React content into the root container
const app = createRoot(root);

// Render the App component into the root container with React Strict Mode
app.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
