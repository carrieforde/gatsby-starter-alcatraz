import React from 'react';
import { StaticQuery, graphql } from 'gatsby';

import Mail from '../../icons/paper-plane-light.svg';
import Github from '../../icons/github-brands.svg';

import styles from './socialNav.module.css';

const SocialNav = () => {
  return (
    <StaticQuery
      query={graphql`
        {
          site {
            siteMetadata {
              social {
                mail
                github
              }
            }
          }
        }
      `}
      render={data => {
        const { social } = data.site.siteMetadata,
          { mail, github } = social;

        return (
          <ul className={styles.socialNav}>
            <li className={styles.socialNavItem}>
              <a href={mail}>
                <Mail />
                <span className={styles.socialNavLabel}>Mail</span>
              </a>
            </li>
            <li className={styles.socialNavItem}>
              <a href={github}>
                <Github />
                <span className={styles.socialNavLabel}>Github</span>
              </a>
            </li>
          </ul>
        );
      }}
    />
  );
};

export default SocialNav;
