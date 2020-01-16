import MdPerson from 'react-icons/lib/md/person'

export default {
  name: 'person',
  type: 'document',
  title: 'Person',
  icon: MdPerson,
  fields: [
    {
      name: 'name',
      type: 'string',
      title: 'Name',
      validation: Rule => Rule.required().error('Person name is required.')
    },
    {
      name: 'slug',
      type: 'slug',
      title: 'Slug',
      description: 'Some frontend will require a slug to be set to be able to show the person',
      options: {
        source: 'name',
        maxLength: 96
      },
      validation: Rule => Rule.required().error('Person slug is required.')
    },
    {
      name: 'image',
      title: 'Image',
      type: 'figure',
      validation: Rule => Rule.required().error('Person image is required.')
    },
    {
      name: 'bio',
      title: 'Bio',
      type: 'bioPortableText',
      validation: Rule => Rule.required().error('Person bio is required.')
    }
  ],
  preview: {
    select: {
      title: 'name',
      media: 'image'
    }
  }
}
