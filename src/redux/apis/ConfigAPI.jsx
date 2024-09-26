import restClient from './RestClient';

export const configAPI = {
    //* User
    userSignIn: (user) => {
        const path = `/api/auth/sign-in`;
        return restClient.post(path, user);
    },
    userSignUp: (user) => {
        const path = `/api/auth/sign-up`;
        return restClient.post(path, user);
    },
    userForgotPassword: (email) => {
        const path = `/api/auth/forgot-password`;
        return restClient.post(path, email);
    },
};