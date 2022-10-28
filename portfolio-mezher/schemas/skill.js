export default {
  name: 'skill',
  title: 'Skill',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      description: 'title of the skill',
      type: 'string',
    },
    {
      name: 'progress',
      title: 'Progress',
      type: 'number',
      description: 'progress of the skill from 0 to 100',
      validation: (rule) => rule.min(0).max(100),   // se pueden hacer validaciones
    },
    {
      name: 'image',
      title: 'Image',
      type: 'image',
      options: {
        hotspot: true
      }
    },
  ],
}
