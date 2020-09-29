module.exports = {
  siteMetadata: {
      address: {
        address1: '402 Amherst St.',
        address2: 'Suite 303',
        city: 'Nashua',
        state: 'NH',
        zip: '03063',
        phone: '(603) 460-4496',
      },
    author: 'ThreePoint Collective',
    contact: [
      {email: 'info@safercontact.com'},
      {email: 'sales@safercontact.com'}
    ],
    description: 'Boilerplate starter project for ThreePoint Collective web projects',
    menuLinks: [
      {
        class: 'home',
        name: 'Home',
        link: '/#home'
      },
      {
        class: 'anonymous-tracing',
        name: 'Anonymous Tracing',
        link: '/#anonymous-tracing'
      },
      {
        class: 'solution',
        name: 'Solution',
        link: '/#solution'
      },
      {
        class: 'features',
        name: 'Features',
        link: '/#features'
      },
      {
        class: 'contact-us',
        name: 'Contact Us',
        link: '/#contact-us'
      }
    ],
    phone: '(555) 555-5555',
    siteUrl: 'https://localhost:3000',
    subtitle: 'Dynamic Contact Tracing Solutions',
    title: 'safercontact',
  },
  plugins: [
    {
      resolve: 'gatsby-plugin-web-font-loader',
      options: {
        typekit: {
          id: 'day0dtq'
        }
      }
    },
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
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'Safercontact website',
        short_name: 'Safercontact',
        start_url: '/',
        background_color: '#000',
        theme_color: '#fff',
        display: 'minimal-ui',
        icon: 'src/images/favicon.png',
      },
    },
    // 'gatsby-plugin-offline',
    // 'gatsby-plugin-react-helmet',
    // {
    //   resolve: 'gatsby-plugin-sitemap',
    //   options: {
    //     exclude: [
    //       '/preview',
    //     ],
    //   },
    // },
    {
      resolve: "gatsby-plugin-react-svg",
      options: {
        rule: {
          include: /svg/
        }
      }
    },
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
    'gatsby-plugin-sass',
    'gatsby-plugin-sharp',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'source',
        path: `${__dirname}/src`,
      },
    },
    'gatsby-transformer-json',
    'gatsby-transformer-sharp'
  ],
}
