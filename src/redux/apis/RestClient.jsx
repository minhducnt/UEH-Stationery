import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import Cookies from 'js-cookie';
import queryString from 'query-string';

import { Helper } from '../../global/utils/helpers/misc';
import { path } from '../../routes/common/GlobalPath';

const restClient = createApi({
    reducerPath: 'api',

    baseQuery: fetchBaseQuery({
        baseUrl: process.env.BASE_URL,
        headers: {
            'Content-Type': 'application/json'
        },
        prepareHeaders: async (headers, { getState, endpoint }) => {
            try {
                const userAuth = Cookies.get('userAuth');
                if (userAuth) {
                    const user = JSON.parse(userAuth);
                    const accessToken = user.accessToken;
                    const refreshToken = user.refreshToken;

                    if (accessToken && !Helper.isTokenExpired(accessToken)) {
                        headers.set('Authorization', `Bearer ${accessToken}`);
                    } else if (
                        !refreshToken &&
                        accessToken != null &&
                        Helper.isTokenExpired(accessToken)
                    ) {
                        Cookies.remove('userAuth');
                        window.location.href = path.signIn;
                    }
                }
            } catch (error) {
                console.error('Error parsing user info:', error);
            }
            return headers;
        },
        paramsSerializer: params => queryString.stringify(params)
    }),

    endpoints: () => ({}),

    tagTypes: []
});

export default restClient;
