export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-portfolio'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5dc07afc02074c53602ac183',
                  title: 'Sanity Studio',
                  name: 'justagirlfromoz-studio',
                  apiId: '50714426-f260-48f3-8f97-ea4877d6e01a'
                },
                {
                  buildHookId: '5dc07afcdd2eba829f4cf85b',
                  title: 'Portfolio Website',
                  name: 'justagirlfromoz',
                  apiId: '64f98723-51d8-456a-a5e5-e1be9ce05d96'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/jcoryalvernaz/justagirlfromoz',
            category: 'Code'
          },
          {
            title: 'Frontend',
            value: 'https://justagirlfromoz.netlify.com',
            category: 'apps'
          }
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent projects', order: '_createdAt desc', types: ['project']},
      layout: {width: 'medium'}
    }
  ]
}
