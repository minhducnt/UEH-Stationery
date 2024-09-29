import { useLayoutEffect } from 'react';
import { useLocation } from 'react-router-dom';

//? Wrapper cho trang web - Scroll về đầu trang khi chuyển trang
const AppWrapper = ({ children }) => {
    const location = useLocation();

    // Scroll về đầu trang khi chuyển trang
    useLayoutEffect(() => {
        document.documentElement.scrollTo(0, 0);
    }, [location.pathname]);

    return children;
};

export default AppWrapper;
