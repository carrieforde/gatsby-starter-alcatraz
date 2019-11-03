export const PageForm = {
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
