import restClient from './RestClient';

// Tạo một đối tượng configAPI chứa các API liên quan đến cấu hình
export const configAPI = {
    //* User
    userSignIn: user => {
        const path = `/api/auth/sign-in`;
        return restClient.post(path, user);
    },
    userSignUp: user => {
        const path = `/api/auth/sign-up`;
        return restClient.post(path, user);
    },
    userForgotPassword: email => {
        const path = `/api/auth/forgot-password`;
        return restClient.post(path, email);
    }
};
