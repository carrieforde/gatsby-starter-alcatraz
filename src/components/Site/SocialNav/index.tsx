import React from 'react';
import { StaticQuery, graphql } from 'gatsby';

import Mail from '../../../icons/paper-plane-light.svg';
import Github from '../../../icons/github-brands.svg';

const SocialNav = () => {
  return (
    <StaticQuery
      query={graphql`
        query {
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
          <ul>
            <li>
              <a href={mail}>
                <Mail />
                <span>Mail</span>
              </a>
            </li>
            <li>
              <a href={github}>
                <Github />
                <span>Github</span>
              </a>
            </li>
          </ul>
        );
      }}
    />
  );
};

export default SocialNav;
