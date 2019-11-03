import React from 'react';
import { liveRemarkForm } from 'gatsby-tinacms-remark';
import { Wysiwyg } from '@tinacms/fields';
import { TinaField } from '@tinacms/form-builder';

import { Page } from '../../../interfaces/page.interface';
import PageHeader from '../PageHeader';

interface PageInlineEditing extends Page {
  isEditing: boolean;
  setIsEditing: Function;
}

const PageElement = ({ data, isEditing, setIsEditing }: PageInlineEditing) => {
  const { frontmatter, html, rawMarkdownBody } = data.markdownRemark;
  const { title, description } = frontmatter;

  return (
    <article>
      <PageHeader title={title} description={description} />
      <TinaField name="rawMarkdownBody" Component={Wysiwyg}>
        <div dangerouslySetInnerHTML={{ __html: html }} />
        <button type="button" onClick={() => setIsEditing((p: boolean) => !p)}>
          {isEditing ? 'Preview' : 'Edit'}
        </button>
      </TinaField>
    </article>
  );
};

export default liveRemarkForm(PageElement);
