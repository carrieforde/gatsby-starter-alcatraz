import React from 'react';

import Site from '../components/Site';
import SEO from '../components/Site/Seo';
import Blog from '../components/Blog';
import PageHeader from '../components/PageElements/PageHeader';

const BlogPage = () => (
  <Site>
    <SEO title="Blog" />
    <PageHeader title="Blog" />
    <Blog />
  </Site>
);

export default BlogPage;
