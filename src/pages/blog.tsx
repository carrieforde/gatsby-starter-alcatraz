import React from 'react';

import Site from '../components/Site';
import SEO from '../components/Site/Seo';
import Blog from '../components/Blog';

const BlogPage = () => (
  <Site>
    <SEO title="Blog" />
    <Blog />
  </Site>
);

export default BlogPage;
