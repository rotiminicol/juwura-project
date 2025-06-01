import React from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import ScrollToTop from '../utils/ScrollToTop';

const Layout: React.FC = () => {
  const location = useLocation();
  const isHome = location.pathname === '/';
  return (
    <>
      <ScrollToTop />
      <Header />
      <main>
        <Outlet />
      </main>
      {isHome && <Footer />}
    </>
  );
};

export default Layout;