import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { HelmetProvider } from 'react-helmet-async';
import { ToastContainer } from './global/utils/Toastify';

import App from './App';

import { GlobalStyle } from './styles/global';
import store from './redux/store';

// Tạo root từ phần tử có id là 'root' trong tài liệu HTML
const root = ReactDOM.createRoot(document.getElementById('root'));

// Render ứng dụng React vào root
root.render(
    <React.StrictMode>
        {/* Cung cấp store cho toàn bộ ứng dụng */}
        <Provider store={store}>
            {/* Cung cấp HelmetProvider cho toàn bộ ứng dụng */}
            <HelmetProvider>
                {/* Render component App */}
                <App />
                {/* Áp dụng GlobalStyle cho toàn bộ ứng dụng */}
                <GlobalStyle />
                {/* Render ToastContainer để hiển thị thông báo */}
                <ToastContainer />
            </HelmetProvider>
        </Provider>
    </React.StrictMode>
);
