import React from 'react';

import Header from './Header';
import Footer from './Footer';

const Site = ({ children }: any) => {
  return (
    <div>
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  );
};

export default Site;
