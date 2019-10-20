import React from 'react';

import Header from './Header';
import Footer from './Footer';

import styles from './site.module.css';

const Site = ({ children }: any) => {
  return (
    <div className={styles.site}>
      <Header />
      <main className={styles.siteMain}>{children}</main>
      <Footer />
    </div>
  );
};

export default Site;
