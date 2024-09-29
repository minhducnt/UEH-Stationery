import styled from 'styled-components';
import { Outlet } from 'react-router-dom';

import Footer from './common/Footer';
import Header from './common/Header';

const StyledMainLayout = styled.div`
    main {
        min-height: 100vh;
        padding: 0 20px;
    }
`;

const MainLayout = () => {
    return (
        <StyledMainLayout>
            <Header />
            <main>
                <Outlet />
            </main>
            <Footer />
        </StyledMainLayout>
    );
};

export default MainLayout;
