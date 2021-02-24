export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
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
                  buildHookId: '603650a3f4e7df0c7a9da9ac',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages-studio-3c45cumk',
                  apiId: '1b09d948-85aa-48c4-a7b1-40f7b5ced39f'
                },
                {
                  buildHookId: '603650a318bbf80c230d1cd0',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages-web-xqseazyb',
                  apiId: 'f1483cb7-03c1-4f3c-b847-55cf1c69cfeb'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/NyashaNziramasanga/sanity-nextjs-landing-pages',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-nextjs-landing-pages-web-xqseazyb.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page']},
      layout: {width: 'medium'}
    }
  ]
}
