import { useSelector } from 'react-redux';
import { Navigate, Outlet } from 'react-router-dom';

import { path } from './common/GlobalPath';

const ProtectedRoutes = ({ children, isAllowed }) => {
    // Lấy thông tin người dùng hiện tại từ state
    const currentUser = useSelector(state => state.authentication.currentUser);

    // Nếu không có người dùng hiện tại, chuyển hướng đến trang đăng nhập
    return !currentUser ? (
        <Navigate to={path.signIn} replace />
    ) : // Nếu vai trò của người dùng hiện tại không nằm trong danh sách được phép, chuyển hướng đến trang không tìm thấy
    !isAllowed.includes(currentUser.role) ? (
        <Navigate to={path.notFound} replace />
    ) : (
        // Nếu người dùng hiện tại hợp lệ, hiển thị nội dung con hoặc Outlet
        children || <Outlet />
    );
};

export default ProtectedRoutes;
