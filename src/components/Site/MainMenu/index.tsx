import React from 'react';
import { Link, useStaticQuery, graphql } from 'gatsby';

import styles from './mainMenu.module.css';

interface MenuItem {
  name: string;
  path: string;
}

const MainMenu = () => {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            menu {
              name
              path
            }
          }
        }
      }
    `
  );

  const { menu } = site.siteMetadata;

  return (
    <nav className={styles.mainMenu}>
      {menu.map((item: MenuItem, index: number) => (
        <Link className={styles.menuItem} key={index} to={item.path}>
          {item.name}
        </Link>
      ))}
    </nav>
  );
};

export default MainMenu;
