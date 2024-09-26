import { configureStore } from '@reduxjs/toolkit';
import { composeWithDevTools } from '@redux-devtools/extension';
import { thunk } from 'redux-thunk';

import restClient from '../redux/apis/RestClient';
import authSliceReducer from './slices/auth/AuthSlice';

const middleware = [thunk];

const store = configureStore({
    reducer: {
        [restClient.reducerPath]: restClient.reducer,
        auth: authSliceReducer
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(middleware),
    devTools: composeWithDevTools(),
});

export default store;

