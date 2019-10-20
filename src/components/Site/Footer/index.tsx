import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';

import SocialNav from '../SocialNav';

import styles from './footer.module.css';

const Footer = () => {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
          }
        }
      }
    `
  );
  const { title } = site.siteMetadata;

  return (
    <footer className={styles.footer}>
      <p className={styles.copyright}>
        Copyright &copy; {new Date().getFullYear()} {title}.
      </p>

      <SocialNav />
    </footer>
  );
};

export default Footer;
