import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import Cookies from 'js-cookie';
import queryString from 'query-string';

import { Helper } from '../../global/utils/helpers/Misc';
import { path } from '../../routes/common/GlobalPath';

// Tạo một đối tượng restClient sử dụng createApi
const restClient = createApi({
    // Đặt tên cho reducer
    reducerPath: 'api',

    // Cấu hình baseQuery với fetchBaseQuery
    baseQuery: fetchBaseQuery({
        // Đặt URL cơ sở từ biến môi trường
        baseUrl: process.env.BASE_URL,
        headers: {
            'Content-Type': 'application/json'
        },
        // Chuẩn bị headers trước khi gửi yêu cầu
        prepareHeaders: async (headers, { getState, endpoint }) => {
            try {
                // Lấy thông tin xác thực người dùng từ cookie
                const userAuth = Cookies.get('userAuth');
                if (userAuth) {
                    const user = JSON.parse(userAuth);
                    const accessToken = user.accessToken;
                    const refreshToken = user.refreshToken;

                    // Nếu accessToken hợp lệ và chưa hết hạn, thêm vào headers
                    if (accessToken && !Helper.isTokenExpired(accessToken)) {
                        headers.set('Authorization', `Bearer ${accessToken}`);
                    }
                    // Nếu accessToken hết hạn và không có refreshToken, xóa cookie và chuyển hướng đến trang đăng nhập
                    else if (!refreshToken && accessToken != null && Helper.isTokenExpired(accessToken)) {
                        Cookies.remove('userAuth');
                        window.location.href = path.signIn;
                    }
                }
            } catch (error) {
                // Xử lý lỗi khi phân tích thông tin người dùng
                console.error('Error parsing user info:', error);
            }
            return headers;
        },
        // Chuyển đổi params thành chuỗi query
        paramsSerializer: params => queryString.stringify(params)
    }),

    // Định nghĩa các endpoints (hiện tại để trống)
    endpoints: () => ({}),

    // Định nghĩa các loại tag (hiện tại để trống)
    tagTypes: []
});
export default restClient;
