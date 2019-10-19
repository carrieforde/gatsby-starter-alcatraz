import React from 'react';
import SocialNav from '../../SocialNav';

import styles from './footer.module.css';
import { StaticQuery, graphql } from 'gatsby';

const Footer = () => (
  <footer className={styles.footer}>
    <StaticQuery
      query={graphql`
        {
          site {
            siteMetadata {
              title
            }
          }
        }
      `}
      render={data => {
        const { title } = data.site.siteMetadata;

        return (
          <p>
            Copyright &copy; {new Date().getFullYear()} {title}.
          </p>
        );
      }}
    />

    <SocialNav />
  </footer>
);

export default Footer;
