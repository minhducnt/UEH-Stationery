import React, { Fragment, lazy, Suspense } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import { path } from './common/GlobalPath';
import AppWrapper from '../global/components/common/Wrapper';

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
const About = lazy(() => import('../pages/home/AboutPage'));

// Common
const NotFound = lazy(() => import('../pages/common/NotFoundPage'));

const RoutesComponent = () => {
    return (
        <Fragment>
            <Suspense fallback={<></>}>
                <Router>
                    <AppWrapper>
                        <Routes>
                            <Route element={<MainLayout />}>
                                <Route path={path.home} element={<Home />} />
                                <Route path={path.signIn} element={<SignIn />} />
                                <Route path={path.signUp} element={<SignUp />} />
                                <Route path={path.forgotPassword} element={<ForgotPassword />} />
                                <Route path={path.about} element={<About />} />
                                <Route path={path.notFound} element={<NotFound />} />
                            </Route>
                        </Routes>
                    </AppWrapper>
                </Router>
            </Suspense>
            <BackToTop />
        </Fragment>
    );
};

export default RoutesComponent;
