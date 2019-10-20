import React from 'react';
import { Link, graphql, useStaticQuery } from 'gatsby';

import MainMenu from '../MainMenu';

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
    <header>
      <Link to="/">
        {logo && <img src={logo} alt={`${title} logo`} />}
        <h1>{title}</h1>
      </Link>
      <MainMenu />
    </header>
  );
};

export default Header;
