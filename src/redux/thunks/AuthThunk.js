import { createAsyncThunk } from '@reduxjs/toolkit';

import { configAPI } from '../apis/ConfigAPI';

// Định nghĩa hàm signIn sử dụng createAsyncThunk để xử lý đăng nhập
export const signIn = createAsyncThunk(
    'auth/signIn',
    async (user, { rejectWithValue }) => {
        try {
            const { data } = await configAPI.userSignIn(user);
            return data;
        } catch (error) {
            return rejectWithValue(error.response.data);
        }
    }
);

// Định nghĩa hàm signUp sử dụng createAsyncThunk để xử lý đăng ký
export const signUp = createAsyncThunk(
    'auth/signUp',
    async (user, { rejectWithValue }) => {
        try {
            const { data } = await configAPI.userSignUp(user);
            return data;
        } catch (error) {
            return rejectWithValue(error.response.data);
        }
    }
);