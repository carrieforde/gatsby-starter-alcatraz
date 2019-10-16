import React from 'react';
import { Link, StaticQuery, graphql } from 'gatsby';

import styles from './mainMenu.module.css';

const MainMenu = () => (
  <nav className={styles.mainNavigation}>
    <StaticQuery
      query={graphql`
        {
          site {
            siteMetadata {
              menu {
                name
                path
              }
            }
          }
        }
      `}
      render={data => {
        const { menu } = data.site.siteMetadata;
        return menu.map((item, index) => (
          <Link key={index} className={styles.link} to={item.path}>
            {item.name}
          </Link>
        ));
      }}
    />
  </nav>
);

export default MainMenu;
