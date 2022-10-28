export default {
  name: 'project',
  title: 'Project',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      description: 'title of my project',
      type: 'string',
    },
    {
      name: 'image',
      title: 'Image',
      type: 'image',
      options: {
        hotspot: true
      }
    },
    {
      name: 'summary',
      title: 'Summary',
      type: 'text',     //cuando es mas largo que unas palabras
    },
    {
      name: 'technologies',
      title: 'technologies',
      type: 'array',
      of: [{type: 'reference', to: { type: 'skill'}}]
    },
    {
      name: 'linkToBuild',
      title: 'LinkToBuild',
      type: 'url',
    },
  ],
}
