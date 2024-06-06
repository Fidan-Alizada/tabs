import React from 'react';
import Header from '../Sections/Header/Header';
import Footer from '../Sections/Footer/Footer';
import './layout.css';


const Layout = ({ children, setRoute }) => {
  return (
    <div>
      <Header setRoute={setRoute} />
      <main>{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;

