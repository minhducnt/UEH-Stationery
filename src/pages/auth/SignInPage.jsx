import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation, useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { withErrorBoundary } from 'react-error-boundary';
import styled from 'styled-components';
import { TextField, Typography, Box, Link, InputAdornment } from '@mui/material';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';

import Button from '../../global/components/buttons/Button';
import MetaData from '../../global/components/dialogs/MetaData';
import { notifySuccess, notifyError } from '../../global/utils/Toastify';
import { loginSchema } from '../../global/utils/validators/Validator';
import { path } from '../../global/utils/constants/GlobalPath';
import { signIn } from '../../redux/thunks/AuthThunk';

// Styled Components
const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    width: 100%;
    flex-direction: column;

    .text-red-600 {
        color: #f44336;
        font-weight: 600;
    }

    .text-red-500 {
        color: #f44336;
        font-weight: 500;
    }
`;

const FormWrapper = styled.div`
    padding: 2rem;
    width: 1135px;
`;

const Title = styled(Typography)`
    && {
        text-align: center;
        background-color: rgba(27, 138, 133, 0.8);
        color: #fff;
        font-size: 32px;
        width: auto;
        margin: 0px auto;
        margin-bottom: 56px;
        padding: 24px;
        text-transform: uppercase;
        text-shadow: 2px 2px 5px rgba(0, 0, 0, 0.6);
    }
`;

const CustomTextField = styled(TextField)`
    & .MuiOutlinedInput-root {
        background-color: #e8e8e8;
        border-radius: 4px;
        padding: 0;
        height: 60px;
        font-size: 18px;
        margin-top: 0.5rem;
        margin-bottom: 1rem;

        & fieldset {
            border: 1px solid #468080;
        }

        &:hover fieldset {
            border-color: #57a8a8;
        }

        &.Mui-focused fieldset {
            border-color: #1b8a85;
        }

        & input::placeholder {
            color: black;
            font-weight: bold;
        }
    }

    & .MuiInputLabel-root {
        display: none;
    }

    .password-eye {
        width: 3rem;
        margin: auto 12px auto 0;
        font-size: 2.4rem;
    }
`;

const FieldTitle = styled(Typography)`
    && {
        margin-bottom: 0.5rem;
        font-size: 16px;
        color: #333;
        font-weight: bold;
    }
`;

const CustomLink = styled(Link)`
    && {
        display: block;
        margin-top: 0.5rem;
        text-align: right;
        color: #666;
        font-size: 1.6rem;
        cursor: pointer;
        &:hover {
            color: var(--primary-color);
        }
        text-decoration: none;
    }
`;

const ButtonWrapper = styled(Box)`
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 1.5rem;
`;

const CustomButton = styled(Button)`
    && {
        color: #fff;
        background-color: #ff7a33;
        height: 60px;
        width: 280px;
        font-size: 2rem;
        font-weight: 700;
        margin: 0.25rem 60px;
        border-radius: 0;
        text-transform: uppercase;
        text-shadow: -1px -1px 0 #226b68, 1px -1px 0 #226b68, -1px 1px 0 #226b68, 1px 1px 0 #226b68;

        &:hover {
            background-color: #ff6a1c;
        }
    }
`;

const SignInPage = () => {
    const [show, setShow] = useState(false);
    const {
        register,
        handleSubmit,
        reset,
        setFocus,
        getValues,
        formState: { errors }
    } = useForm({
        defaultValues: {
            email: '',
            password: ''
        },
        resolver: yupResolver(loginSchema),
        mode: 'onChange'
    });

    const dispatch = useDispatch();
    const location = useLocation();

    const { isAuthenticated, loading, error, user } = useSelector(state => state.auth);
    const navigate = useNavigate();

    const handleLogin = data => {
        const { email, password } = data;
        dispatch(signIn(email, password));
    };

    const redirect = location.search ? location.search.split('=')[1] : '/home';

    useEffect(() => {
        if (isAuthenticated) {
            if (user.role === 'user') {
                navigate(redirect);
            } else {
                navigate('/admin/dashboard');
            }
            reset();
            notifySuccess('Login successfully!');
        }

        if (error) {
            setFocus('email');
            notifyError(error);
            reset();
        }
    }, [error, isAuthenticated, dispatch, navigate, reset, setFocus, user.role, redirect]);

    useEffect(() => {
        setFocus('email');
    }, [setFocus]);

    return (
        <>
            <MetaData title="Đăng nhập"></MetaData>

            <Container>
                <Title variant="h5">Đăng Nhập Tài Khoản</Title>

                <form onSubmit={handleSubmit(handleLogin)} autoComplete="off">
                    <FormWrapper>
                        <FieldTitle>
                            Địa chỉ email <span className="text-red-600">*</span>
                        </FieldTitle>
                        <CustomTextField
                            fullWidth
                            type="email"
                            {...register('email')}
                            variant="outlined"
                            placeholder="Email"
                            required
                        />
                        {errors?.email && (
                            <div className="text-red-500">{errors.email?.message}</div>
                        )}

                        <FieldTitle>
                            Mật khẩu <span className="text-red-600">*</span>
                        </FieldTitle>
                        <CustomTextField
                            fullWidth
                            variant="outlined"
                            type={show ? 'text' : 'password'}
                            {...register('password')}
                            placeholder="Password"
                            required
                            InputProps={{
                                endAdornment: (
                                    <InputAdornment position="end">
                                        {getValues('password') &&
                                            (!show ? (
                                                <VisibilityIcon
                                                    className="password-eye"
                                                    onClick={() => setShow(prev => !prev)}
                                                />
                                            ) : (
                                                <VisibilityOffIcon
                                                    className="password-eye"
                                                    onClick={() => setShow(prev => !prev)}
                                                />
                                            ))}
                                    </InputAdornment>
                                )
                            }}
                        />
                        {errors?.password && (
                            <div className="text-red-500">{errors.password?.message}</div>
                        )}

                        <CustomLink href={path.forgotPassword}>Quên mật khẩu?</CustomLink>

                        <ButtonWrapper>
                            <CustomButton
                                variant="contained"
                                type="submit"
                                disabled={loading ? true : false}
                            >
                                Đăng Nhập
                            </CustomButton>
                            <CustomButton variant="contained" onClick={() => navigate(path.signUp)}>
                                Đăng Ký
                            </CustomButton>
                        </ButtonWrapper>
                    </FormWrapper>
                </form>
            </Container>
        </>
    );
};

const FallbackComponent = () => {
    return <p className="text-red-400 bg-red-50">Something went wrong with this Component</p>;
};

export default withErrorBoundary(SignInPage, FallbackComponent);
