import { createRoot } from 'react-dom/client';
import App from './components/App.jsx';

import '../src/style/index.css';

const root = document.getElementById('root');
const app = createRoot(root);
app.render(<App />);
