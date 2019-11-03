import { createRemarkButton } from 'gatsby-tinacms-remark';
import { slugify } from '../../utils/utilities';

const CreatePageButton = createRemarkButton({
  label: 'Add Page',
  fields: [
    {
      name: 'title',
      label: 'Title',
      component: 'text',
      required: true
    }
  ],
  filename: form => {
    return `content/pages/${slugify(form.title)}/index.md`;
  },
  frontmatter: form => ({
    title: form.title,
    date: new Date()
  }),
  body: () => 'This is your new page. Add your content here!'
});

export default CreatePageButton;
