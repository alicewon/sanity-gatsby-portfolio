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
                  buildHookId: '5ed0d05412f74ccd7fccb5aa',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-portfolio-studio-qwbic54o',
                  apiId: '44635acf-f03e-40e5-8066-5c4b16b18ee3'
                },
                {
                  buildHookId: '5ed0d054a6539a81324352ad',
                  title: 'Portfolio Website',
                  name: 'sanity-gatsby-portfolio-web-sxjzi6ja',
                  apiId: 'df1aeba0-4d0e-460b-b810-951dc343d8b3'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/alicewon/sanity-gatsby-portfolio',
            category: 'Code'
          },
          {
            title: 'Frontend',
            value: 'https://sanity-gatsby-portfolio-web-sxjzi6ja.netlify.app',
            category: 'apps'
          }
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent projects', order: '_createdAt desc', types: ['sampleProject']},
      layout: {width: 'medium'}
    }
  ]
}
