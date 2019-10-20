import React from 'react';
import { Link, graphql, useStaticQuery } from 'gatsby';

import Logo from '../Logo';
import MainMenu from '../MainMenu';

import styles from './header.module.css';

const Header = () => {
  const data = useStaticQuery(graphql`
    query {
      logo: file(absolutePath: { regex: "/logo/" }) {
        publicURL
      }
      site {
        siteMetadata {
          title
        }
      }
    }
  `);
  const { title } = data.site.siteMetadata;
  const logo = data.logo ? data.logo.publicURL : undefined;

  return (
    <header className={styles.header}>
      <Link className={styles.headerLink} to="/">
        {logo && <Logo src={logo} title={title} />}
        <p className={logo ? styles.siteTitleHidden : styles.siteTitle}>
          {title}
        </p>
      </Link>
      <MainMenu />
    </header>
  );
};

export default Header;
