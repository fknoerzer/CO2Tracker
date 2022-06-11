import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import AuthProvider from "./context/AuthProvider";
import {HashRouter} from "react-router-dom";


const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);
root.render(
    <React.StrictMode>
        <HashRouter>
            <AuthProvider>
                <App/>
            </AuthProvider>
        </HashRouter>
    </React.StrictMode>
);

