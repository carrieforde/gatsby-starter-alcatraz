import { createRemarkButton } from 'gatsby-tinacms-remark';
import { slugify } from '../../utils/utilities';

const CreatePostButton = createRemarkButton({
  label: 'Add Post',
  fields: [
    {
      name: 'title',
      label: 'Title',
      component: 'text',
      required: true
    }
  ],
  filename: form => {
    return `content/posts/${slugify(form.title)}/index.md`;
  },
  frontmatter: form => ({
    title: form.title,
    date: new Date(),
    updated: ''
  }),
  body: () => 'This is your new blog post. Add your content here!'
});

export default CreatePostButton;
