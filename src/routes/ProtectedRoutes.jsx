import { useSelector } from 'react-redux';
import { Navigate, Outlet } from 'react-router-dom';

import { path } from './common/GlobalPath';

const ProtectedRoutes = ({ children, isAllowed }) => {
    const currentUser = useSelector(state => state.authentication.currentUser);

    return !currentUser ? (
        <Navigate to={path.signIn} replace />
    ) : !isAllowed.includes(currentUser.role) ? (
        <Navigate to={path.notFound} replace />
    ) : (
        children || <Outlet />
    );
};

export default ProtectedRoutes;
