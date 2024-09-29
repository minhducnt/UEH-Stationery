import * as Yup from 'yup';

export const phoneRegex =
    /^((\+\d{1,3}(-| )?\(?\d\)?(-| )?\d{1,3})|(\(?\d{2,3}\)?))(-| )?(\d{3,4})(-| )?(\d{4})(( x| ext)\d{1,5}){0,1}$/;

export const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

export const usernameRegex = /^[a-zA-Z0-9_]{0,15}$/;

export const pincodeRegex = /^\d{6}$/;

export const loginSchema = Yup.object({
    email: Yup.string().required('Please enter your email.').email('Please enter valid email.'),
    password: Yup.string()
        .required('Please enter your password.')
        .min(8, 'Password must be 8 characters')
});

export const registerSchema = Yup.object({
    fullname: Yup.string().required('Please enter your full name.'),
    email: Yup.string().required('Please enter your email.').email('Please enter valid email.'),
    password: Yup.string()
        .required('Please enter your password.')
        .min(8, 'Password must be 8 characters'),
    address: Yup.string().required('Please enter your address.'),
    phone: Yup.string()
        .required('Please enter your phone number.')
        .matches(phoneRegex, 'Please enter valid phone number.'),
    gender: Yup.string().required('Please select your')
});
