import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation, useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { withErrorBoundary } from 'react-error-boundary';
import styled from 'styled-components';
import { TextField, Typography, Box } from '@mui/material';

import Button from '../../global/components/buttons/Button';
import MetaData from '../../global/components/dialogs/MetaData';
import { notifySuccess, notifyError } from '../../global/utils/Toastify';
import { loginSchema } from '../../global/utils/validators/validator';

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
        background-color: rgba(27, 138, 133, 1);
        color: #fff;
        font-size: 32px;
        width: auto;
        margin: 0px auto;
        margin-bottom: 56px;
        padding: 24px;
        text-transform: uppercase;
        text-shadow: -1px -1px 0 #226b68, 1px -1px 0 #226b68, -1px 1px 0 #226b68, 1px 1px 0 #226b68;
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
        width: 240px;
        height: 60px;
        font-size: 2.4rem;
        font-weight: 700;
        font-family: 'Anton SC';
        padding: 0.5rem 1rem;
        margin: 0.25rem 60px;
        border-radius: 0;
        text-transform: uppercase;
        text-shadow: -0.5px -0.5px 0 #005f69, 0.5px -0.5px 0 #005f69, -0.5px 0.5px 0 #005f69,
            0.5px 0.5px 0 #005f69;

        &:hover {
            background-color: #ff6a1c;
        }
    }
`;

const ForgotPasswordPage = () => {
    const {
        register,
        handleSubmit,
        reset,
        setFocus,
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
        // const { email, password } = data;s
        // dispatch(forgotPassword(email, password));
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
            notifySuccess('Đăng nhập thành công!');
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
            <MetaData title="Quên mật khẩu"></MetaData>

            <Container>
                <Title variant="h5">Quên Mật Khẩu</Title>

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

                        <ButtonWrapper>
                            <CustomButton
                                variant="contained"
                                type="submit"
                                disabled={loading ? true : false}
                            >
                                Lấy Lại Mật Khẩu
                            </CustomButton>
                            <CustomButton variant="contained" onClick={() => navigate(-1)}>
                                Trở Lại
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

export default withErrorBoundary(ForgotPasswordPage, FallbackComponent);
