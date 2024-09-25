import './styles/App.css';

import {
  Fragment,
  lazy,
  Suspense,
} from 'react';
import { Outlet, Route, Routes } from 'react-router-dom';
import ScrollToTop from 'react-scroll-to-top';

const Wrapper = lazy(() => import('./global/layout/wrapper.jsx'));

const Footer = lazy(() => import('./global/layout/footers/footer.jsx'));

const NotFoundPage = lazy(() => import('./pages/common/NotFoundPage'));

function App() {
  return (
    <Fragment>
      <Suspense fallback={<></>}>
        <Wrapper>
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <Outlet />
                  <Footer />
                </>
              }
            >
            </Route>
            <Route path="/*" element={<NotFoundPage />}></Route>
          </Routes>
        </Wrapper>
      </Suspense>
      <ScrollToTop
        smooth
        viewBox="0 0 16 24"
        svgPath="M18 15l-6-6-6 6"
        style={{
          background: 'linear-gradient(94.43deg, #1A6BF0 0%, #0742A5 96.94%)',
        }}
      />
    </Fragment>
  );
}



export default App;