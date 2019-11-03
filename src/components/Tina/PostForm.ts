export const PostForm = {
  fields: [
    {
      label: 'Title',
      name: 'rawFrontmatter.title',
      description: 'Enter the post title.',
      component: 'text'
    },
    {
      label: 'Date',
      name: 'rawFrontmatter.date',
      description: '',
      component: 'date',
      dateFormat: 'YYYY DD MMMM',
      timeFormat: false
    },
    {
      label: 'Updated Date',
      name: 'rawFrontmatter.updated',
      description: 'If the post is updated, add the updated date.',
      component: 'date',
      dateFormat: 'YYYY DD MMMM',
      timeFormat: false
    },
    {
      label: 'Category',
      name: 'rawFrontmatter.category',
      description: '(Optional)',
      component: 'text'
    },
    {
      label: 'Description',
      name: 'rawFrontmatter.description',
      description: '(Optional). Craft a custom excerpt.',
      component: 'textarea'
    },
    {
      label: 'Content',
      name: 'rawMarkdownBody',
      description: '',
      component: 'markdown'
    }
  ]
};
