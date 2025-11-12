// import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';
import Alternative from './Alternative.jsx';

createRoot(document.getElementById('root')).render(
    <>
        <App />
        {/* <Alternative /> */}
    </>
);
