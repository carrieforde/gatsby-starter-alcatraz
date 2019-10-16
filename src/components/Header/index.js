import React from 'react';
import { Link, graphql, useStaticQuery } from 'gatsby';
import PropTypes from 'prop-types';

import MainMenu from '../MainMenu';
import styles from './header.module.css';

const Header = () => {
  const data = useStaticQuery(graphql`
    {
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
    <header className={styles.siteHeader}>
      <Link className={styles.siteBranding} to="/">
        {logo && <img src={logo} alt={`${title} logo`} />}
        <h1 className={data.logo ? styles.siteTitle : undefined}>{title}</h1>
      </Link>
      <MainMenu />
    </header>
  );
};

Header.propTypes = {
  data: PropTypes.object
};

Header.defaultProps = {
  siteTitle: ''
};

export default Header;
