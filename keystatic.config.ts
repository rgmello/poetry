import { config, fields, collection } from '@keystatic/core';

const isLocal = import.meta.env.DEV;

export default config({
  storage: {
    kind: isLocal ? 'local' : 'github',
    repo: 'rgmello/poetry',
  },
  collections: {
    poems: collection({
      label: 'Poemas',
      slugField: 'title',
      path: 'src/content/poems/*',
      format: { contentField: 'content', data: 'yaml' },
      schema: {
        title: fields.slug({
          name: { label: 'Título' },
          slug: { label: 'Identificador (URL)' }
        }),
        author: fields.text({ label: 'Autor' }),
        date: fields.text({ label: 'Ano de Publicação' }),
        tags: fields.array(
          fields.text({ label: 'Tag' }),
          { label: 'Tags', itemLabel: props => props.value }
        ),
        content: fields.markdoc({ label: 'Conteúdo' }),
      },
    }),
  },
});
