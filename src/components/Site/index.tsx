import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';

import Header from './Header';
import Footer from './Footer';

const Site = ({ children }: any) => {
  const { site } = useStaticQuery(
    graphql`
      {
        site {
          siteMetadata {
            title
          }
        }
      }
    `
  );

  return (
    <div>
      <Header siteTitle={site.siteMetadata.title} />
      <main>{children}</main>
      <Footer />
    </div>
  );
};

export default Site;
