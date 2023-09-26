import React from 'react';
import ReactDOM from 'react-dom';

// Import the main App component
import App from './App.jsx';

// Import the CSS styles
import '../style/index.css';

// Get the container element with the id 'root' from the HTML
const container = document.getElementById('root');

// Render the App component into the container
ReactDOM.render(<App />, container);

// Create a root and render the App component with React Strict Mode
// Note: This is a more modern approach, ensuring best practices
ReactDOM.createRoot(container).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
