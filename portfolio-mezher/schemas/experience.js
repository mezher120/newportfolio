export default {
  name: 'experience',
  title: 'Experience',
  type: 'document',
  fields: [
    {
      name: 'jobTitle',
      title: 'Job Title',
      type: 'string',
    },
    {
      name: 'companyImage',
      title: 'Company Image',
      type: 'image',
      options: {
        hotspot: true
      }
    },
    {
      name: 'company',
      title: 'Company',
      type: 'string',
    },
    {
      name: 'dateStarted',
      title: 'Date started',
      type: 'string',
    },
    {
      name: 'dateEnded',
      title: 'Date Ended',
      type: 'string',
    },
    {
      name: 'isCurrentlyWorking',
      title: 'isCurrentlyWorking',
      type: 'boolean',
    },  
    {
      name: 'technologies',
      title: 'technologies',
      type: 'array',
      of: [{type: "reference", to: {type: 'skill'}}] //se hace referrencia al array de skill en este caso
    },
    {
      name: 'points',
      title: 'Points',
      type: 'array',
      of: [{type: 'string'}],
    },  
  ],
}
