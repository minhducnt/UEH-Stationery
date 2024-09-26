import { createAsyncThunk } from '@reduxjs/toolkit';

import { configAPI } from '../apis/ConfigAPI';

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