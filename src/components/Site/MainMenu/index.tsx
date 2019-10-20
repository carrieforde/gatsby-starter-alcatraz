import React from 'react';
import { Link, useStaticQuery, graphql } from 'gatsby';

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
    <nav>
      {menu.map((item: MenuItem, index: number) => (
        <Link key={index} to={item.path}>
          {item.name}
        </Link>
      ))}
    </nav>
  );
};

export default MainMenu;
