import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';

import SocialNav from '../SocialNav';

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
  const { title } = site;

  return (
    <footer>
      <p>
        Copyright &copy; {new Date().getFullYear()} {title}.
      </p>

      <SocialNav />
    </footer>
  );
};

export default Footer;
