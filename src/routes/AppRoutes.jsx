import React, { Fragment, lazy, Suspense, useLayoutEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';

import { path } from '../global/utils/constants/GlobalPath';

//* Layout
import MainLayout from '../global/layout/MainLayout';
import BackToTop from '../global/libraries/BackToTop';

//* Pages
// Authentication
const SignIn = lazy(() => import('../pages/auth/SignInPage'));
const SignUp = lazy(() => import('../pages/auth/SignUpPage'));
const ForgotPassword = lazy(() => import('../pages/auth/ForgotPasswordPage'));

// Home
const Home = lazy(() => import('../pages/home/HomePage'));

// Common
const NotFound = lazy(() => import('../pages/common/NotFoundPage'));

const RoutesComponent = () => {
    return (
        <Fragment>
            <Suspense fallback={<></>}>
                <Router>
                    <Wrapper>
                        <Routes>
                            <Route element={<MainLayout />}>
                                <Route path={path.home} element={<Home />} />
                                <Route path={path.signIn} element={<SignIn />} />
                                <Route path={path.signUp} element={<SignUp />} />
                                <Route path={path.forgotPassword} element={<ForgotPassword />} />
                                <Route path={path.notFound} element={<NotFound />} />
                            </Route>
                        </Routes>
                    </Wrapper>
                </Router>
            </Suspense>
            <BackToTop />
        </Fragment>
    );
};

const Wrapper = ({ children }) => {
    const location = useLocation();
    useLayoutEffect(() => {
        document.documentElement.scrollTo(0, 0);
    }, [location.pathname]);
    return children;
};

export default RoutesComponent;
