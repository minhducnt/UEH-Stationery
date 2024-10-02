import styled from 'styled-components';
import { Outlet } from 'react-router-dom';

import Footer from '../components/parts/Footer';
import Header from '../components/parts/Header';

const SMainLayout = styled.div`
    main {
        min-height: 100vh;
        padding: 0;
    }
`;

const MainLayout = () => {
    return (
        <SMainLayout>
            <Header />
            <main>
                <Outlet />
            </main>
            <Footer />
        </SMainLayout>
    );
};

export default MainLayout;
