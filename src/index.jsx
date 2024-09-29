import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { HelmetProvider } from 'react-helmet-async';
import { ToastContainer } from './global/utils/Toastify';

import App from './App';

import { GlobalStyle } from './styles/global';
import store from './redux/store';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
    <React.StrictMode>
        <Provider store={store}>
            <HelmetProvider>
                <App />
                <GlobalStyle />
                <ToastContainer />
            </HelmetProvider>
        </Provider>
    </React.StrictMode>
);
