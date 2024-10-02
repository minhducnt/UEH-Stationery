import { configureStore } from '@reduxjs/toolkit';
import { composeWithDevTools } from '@redux-devtools/extension';
import { thunk } from 'redux-thunk';

import restClient from '../redux/apis/RestClient'; // Import đối tượng restClient từ file RestClient
import authSliceReducer from './slices/auth/AuthSlice'; // Import reducer authSliceReducer từ file AuthSlice

//* Định nghĩa mảng middleware bao gồm thunk
const middleware = [thunk];

//* Cấu hình store sử dụng configureStore
const store = configureStore({
    // Thêm các reducer vào store
    reducer: {
        [restClient.reducerPath]: restClient.reducer,
        auth: authSliceReducer
    },

    // Thêm middleware vào store
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(middleware),

    // Kích hoạt Redux DevTools
    devTools: composeWithDevTools(),
});

export default store;