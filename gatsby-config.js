module.exports = {
  siteMetadata: {
    author: 'ThreePoint Collective',
    description: 'Boilerplate starter project for ThreePoint Collective web projects',
    menuLinks: [
      {
        class: 'login',
        name: 'Login',
        link: 'http://app.safercontact.com/'
      },
      {
        class: 'contact-us',
        name: 'Contact Us',
        link: '/contact-us'
      }
    ],
    phone: '(555) 555-5555',
    siteUrl: 'https://localhost:3000',
    title: 'Safer Contact',
  },
  plugins: [
    'gatsby-background-image',
    // Uncomment when Prismic repo is setup
    // {
    //   resolve: 'gatsby-source-prismic-graphql',
    //     options: {
    //       accessToken: '',
    //       omitPrismicScript: true,
    //       repositoryName: '',
    //   }
    // },
    // Uncomment when in production
    // {
    //   resolve: 'gatsby-plugin-google-tagmanager',
    //   options: {
    //     id: '',
    //     includeInDevelopment: false,
    //     defaultDataLayer: { platform: "gatsby" },
    //     routeChangeEventName: "gatsby-route-change",
    //   },
    // },
    // {
    //   resolve: 'gatsby-plugin-manifest',
    //   options: {
    //     name: 'ThreePoint Collective Starter',
    //     short_name: 'ThreePoint',
    //     start_url: '/',
    //     background_color: '#000',
    //     theme_color: '#fff',
    //     display: 'minimal-ui',
    //     icon: 'src/images/triangle.png', // This path is relative to the root of the site.
    //   },
    // },
    // 'gatsby-plugin-offline',
    'gatsby-plugin-react-helmet',
    // {
    //   resolve: 'gatsby-plugin-sitemap',
    //   options: {
    //     exclude: [
    //       '/preview',
    //     ],
    //   },
    // },
    // {
    //   resolve: 'gatsby-plugin-robots-txt',
    //   options: {
    //     host: '',
    //     policy: [{
    //       userAgent: '*',
    //       allow: '/',
    //       disallow: '/site-mailer'
    //     }],
    //     output: '/robots.txt',
    //     sitemap: ''
    //   },
    // },  
    {
      resolve: "gatsby-plugin-react-svg",
      options: {
        rule: {
          include: /svg/ // See below to configure properly
        }
      }
    },  
    'gatsby-plugin-sass',
    'gatsby-plugin-sharp',
    'gatsby-plugin-transition-link',
    {
      resolve: 'gatsby-plugin-typography',
      options: {
        pathToConfigModule: 'src/utils/typography',
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'source',
        path: `${__dirname}/src`,
      },
    },
    {
      resolve: `@ccalamos/gatsby-source-googlemaps-static`,
      options: {
        key: `AIzaSyB-to2lJwJ93QnMRaEHnVBfPmTmEBIxCoI`,
        paths: [
          {
              color: `0x00000000`,
              weight: `5`,
              fillColor: `0xFF0000`,
              points: [
                  `42.785102, -71.509988`,
                  `42.784929, -71.509658`,
                  `42.784583, -71.509996`,
                  `42.784768, -71.510331`,
              ],
          },
        ],
        zoom: 17
      },
  },
    'gatsby-transformer-sharp'
  ],
}
