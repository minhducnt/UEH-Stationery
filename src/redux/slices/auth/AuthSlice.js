import { createSlice } from '@reduxjs/toolkit';

import { setLocalStorage, removeLocalStorage, getLocalStorage } from '../../../global/utils/LocalStorage';
import { signIn, signUp } from '../../thunks/AuthThunk';

const LocalStorage = {
	currentUser: 'currentUser',
	accessToken: 'accessToken',
};

const initialState = {
	user: getLocalStorage(JSON.stringify(LocalStorage.currentUser)) || {},
	loading: false,
	isAuthenticated: false,
	error: '',
};

//* Handlers
const handleAuthFulfilled = (state, action) => {
	const { user, accessToken } = action.payload.data;
	state.currentUser = { ...user };

	// Lưu thông tin user vào localStorage
	setLocalStorage(LocalStorage.currentUser, JSON.stringify(user));
	setLocalStorage(LocalStorage.accessToken, accessToken);
};

const handleAuthRejected = (state, action) => {
	state.error = action.payload.message;
};

//* Slice
const authSlice = createSlice({
	name: 'auth',
	initialState,
	reducers: {
		loginRequest: (state) => {
			state.loading = true;
			state.isAuthenticated = false;
		},

		registerUserRequest: (state) => {
			state.loading = true;
			state.isAuthenticated = false;
		},

		loadUserRequest: (state) => {
			state.loading = true;
			state.isAuthenticated = false;
		},

		loginSuccess: (state, action) => {
			state.loading = false;
			state.isAuthenticated = true;
			state.user = action.payload;
		},

		registerUserSuccess: (state, action) => {
			state.loading = false;
			state.isAuthenticated = true;
			state.user = action.payload;

			// Lưu thông tin user vào localStorage
			removeLocalStorage(LocalStorage.currentUser);
			removeLocalStorage(LocalStorage.accessToken);
		},

		loadUserSuccess: (state, action) => {
			state.loading = false;
			state.isAuthenticated = true;
			state.user = action.payload;
		},

		logoutSuccess: (state) => {
			state.loading = false;
			state.isAuthenticated = false;
			state.user = null;
		},

		logoutFail: (state) => {
			state.loading = false;
		},
	},
	extraReducers: (builder) => {
		builder
			.addCase(signUp.fulfilled, handleAuthFulfilled)
			.addCase(signUp.rejected, handleAuthRejected)
			.addCase(signIn.fulfilled, handleAuthFulfilled)
			.addCase(signIn.rejected, handleAuthRejected);
	},
});

export const {
	loginRequest,
	registerUserRequest,
	loadUserRequest,
	loginSuccess,
	registerUserSuccess,
	loadUserSuccess,
	logoutSuccess,
	logoutFail,
} = authSlice.actions;

export default authSlice.reducer;
