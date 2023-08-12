import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import { DimensionContextProvider } from './store/DimensionContext';
import './style.css';

const root = createRoot(document.getElementById("root"));

root.render(
    <DimensionContextProvider>
        <App />
    </DimensionContextProvider>
);