import React from 'react';
import { Link } from 'gatsby';
import { slugify } from '../../utils/utilities';

const Category = ({ category }: { category: string }) => (
  <Link to={`/category/${slugify(category)}`}>
    <span>{category}</span>
  </Link>
);

export default Category;
