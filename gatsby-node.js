const path = require('path');
const { createFilePath } = require('gatsby-source-filesystem');

const slugify = slug => slug.replace(/\s/g, '-').toLowerCase();

/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions;

  if (node.internal.type === 'MarkdownRemark') {
    const slug = createFilePath({
      node,
      getNode,
      basePath: `${__dirname}/content/posts`
    });

    createNodeField({
      node,
      name: 'slug',
      value: slug
    });
  }

  if (node.internal.type === 'AllMarkdownRemark') {
    const category = createFilePath({
      node,
      getNode,
      basePath: `${__dirname}/content/posts`
    });

    createNodeField({
      node,
      name: 'category',
      value: category
    });
  }

  if (node.internal.type === 'AllMarkdownRemark') {
    const tag = createFilePath({
      node,
      getNode,
      basePath: `${__dirname}/content/posts`
    });

    createNodeField({
      node,
      name: 'tag',
      value: tag
    });
  }
};

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;
  const result = await graphql(`
    query Content {
      pages: allMarkdownRemark(
        filter: {
          fileAbsolutePath: { regex: "/pages/" }
          fields: { slug: { ne: "/home/" } }
        }
      ) {
        edges {
          node {
            id
            fields {
              slug
            }
          }
        }
      }
      posts: allMarkdownRemark(
        filter: { fileAbsolutePath: { regex: "/posts/" } }
        sort: { fields: frontmatter___date, order: DESC }
      ) {
        edges {
          previous {
            fields {
              slug
            }
            frontmatter {
              title
            }
          }
          next {
            fields {
              slug
            }
            frontmatter {
              title
            }
          }
          node {
            fields {
              slug
            }
          }
        }
      }
      categories: allMarkdownRemark(
        filter: { fileAbsolutePath: { regex: "/posts/" } }
      ) {
        group(field: frontmatter___category) {
          fieldValue
        }
      }
      tags: allMarkdownRemark(
        filter: { fileAbsolutePath: { regex: "/posts/" } }
      ) {
        group(field: frontmatter___tags) {
          fieldValue
        }
      }
    }
  `);

  if (result.errors) {
    throw result.errors;
  }

  const { pages, posts, categories, tags } = result.data;

  posts.edges.forEach(post => {
    createPage({
      path: post.node.fields.slug,
      component: path.resolve('./src/templates/Post/Post.tsx'),
      context: {
        slug: post.node.fields.slug,
        previous: post.previous ? post.previous : null,
        next: post.next ? post.next : null
      }
    });
  });

  pages.edges.forEach(page => {
    createPage({
      path: page.node.fields.slug,
      component: path.resolve('./src/templates/Page/Page.tsx'),
      context: {
        slug: page.node.fields.slug
      }
    });
  });

  categories.group.forEach(category => {
    createPage({
      path: `category/${slugify(category.fieldValue)}`,
      component: path.resolve('./src/templates/Categories/Categories.tsx'),
      context: {
        category: category.fieldValue
      }
    });
  });

  tags.group.forEach(tag => {
    createPage({
      path: `tag/${slugify(tag.fieldValue)}`,
      component: path.resolve('./src/templates/Tags/Tags.tsx'),
      context: {
        tag: tag.fieldValue
      }
    });
  });
};
