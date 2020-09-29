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
    {
      resolve: "gatsby-plugin-guess-js",
      options: {
        GAViewID: `230022083`,
        jwt: {
          client_email: "safercontact@safercontact-guess-js.iam.gserviceaccount.com",
          private_key: "-----BEGIN PRIVATE KEY-----\nMIIEvAIBADANBgkqhkiG9w0BAQEFAASCBKYwggSiAgEAAoIBAQClBjuTIbUXOeWt\nXEJTAfHY7APVzi5IIzMGKcJKfU3KB4+xjrdcBrV0zxAILOjZrCYKMa9yy9ZJqwyH\nho9uBqkO7Zr2OY+RgTlXNu0quCIeErB+8jbVHGwwox6oG4E5vo+Z3Lx2J3t3HO+T\nxFEFXjNDM+KTeajlzNKHFdpOMdCnVAM1cny8ndNPXud6chQ/AHxJqjYuu1aMPX0s\nFu+Ogxstzr58ErOH509mOIOKuoz9ta2HcyDh/o3ZQzDo2gCeJ0DEYiFlmSD7cYU0\nuV65NbJW31wlOijlHdX3Xf+ZOGmSP70kiuqZuUewu6xg8aiES3TqRFu4pzmeURWD\nyEcBXXhbAgMBAAECggEADB5IDUbomHSjXbasfCuXyfLGJh/TUDxqSJj6cCPn3965\nE5qqWYyrxV2LQAs90ilzf0SLLYyzoL2tC6q69gmkX1J3En72ZwLGGWLdya+ARq5F\n3bY47Pwx8BeaboSoJnuZUGNgR426SFK/2R10FOCh0ENYIrV7zKkQCksPHxzgK9lZ\nbD5b34alcWjJxYsqoMa4Rh/zlpyYTQ52AsW+1iWJFkOy7+eOlWoHrRMq0bNCmhJ4\nWOaTbrKDBDDC4jFN55brhoS12BJ+qTZoO0hjiBluOHXhBfxVd0VRD/2IXjEck86S\nagZMIwHnS3F8UGH7KdL8+tHUUaXgCkmKeEtA1B9MKQKBgQDf7YeQ8sVLOB0mAr0u\nbCslgtqY/9XwCEhVxFjqqdG4zDRT9dcLNcCV4iJpQAPJZzXiGjgIpKGadh6twujR\nTSCo8AIctWteXgXAtXAYHOX2s47L4Uoy2BVMcY0w3j3a9VfCPLG+i5OS/C6qBpvw\nj0ml60NRpDsCmyNCtH9Z3/A+5QKBgQC8qPcYoFEEWS73/qmO8KVYTmPGEd/feaaV\nT/IbHN3wA8qhe+BkyafPco0n5SxvBi5NBMtexUlekTAzSSAFo7rhtq4xmxtOOK3a\nYw+Btvlh8BmOidjGzdRblDXK7Py6oTT4ttna4wFLcBH+5vwMKZNeG6dY8M31fYv6\nhbNnJcgmPwKBgBeulD7FHg51cce6VG2bbPi7nQi/Tc3j4lqHuGug6BgmKIaUoliC\nJ8ryLnd5GK1tJ+qwoSpw1tJyGY6A5YR1JrYXI/ILUb6aLPuTdLZoH/32QWzYd7Nm\n3OHHxIndhycn+U8GgjnHoyTRXNIIfudzD/PnLKhuuPruk00Tr8A+ibbtAoGAV14w\nQDlOC6N5euN2hnmvOLvkvL9eW9GscY06Y4/0v8ghuLLzcflpO0qjUAxzjV7hZk2I\nGPVoSuEV30pICBSQ4SKGfPaFqK3a5T3m2n1v9AkK7NWtjDOZ2mdCmh0x1QP+0gdr\n0FA8M0FNNCyoIMHIO1a3IxsxZjSj9HqiYGxAymUCgYA9YvA4U4cG6P7h8vmhQC80\nIOJcJQUVC1EML63i+EyzKZ4on4iUD2WH7rHa03Z7h1QSF9mZNzRTLN+Nkkl85P1Y\nxX952i1LQANCn4iPBHrxseKh9j33YjbmWiXkVLEMLu5SL+Z6fFfPwQqXPGNJoXwh\nANK1gCCwt8kfW/bv80vxVA==\n-----END PRIVATE KEY-----\n",
        },
        minimumThreshold: 0.03,
        period: {
          startDate: new Date("2018-1-1"),
          endDate: new Date(),
        },
      },
    },
    {
      resolve: 'gatsby-plugin-google-tagmanager',
      options: {
        id: 'GTM-58X3Z98',
        includeInDevelopment: false,
        defaultDataLayer: { platform: "gatsby" },
        routeChangeEventName: "gatsby-route-change",
      },
    },
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
    'gatsby-plugin-offline',
    'gatsby-plugin-preact',
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-plugin-sitemap',
      options: {
        exclude: [
          '/preview',
        ],
      },
    },
    {
      resolve: "gatsby-plugin-react-svg",
      options: {
        rule: {
          include: /svg/
        }
      }
    },
    {
      resolve: 'gatsby-plugin-robots-txt',
      options: {
        host: '',
        policy: [{
          userAgent: '*',
          allow: '/',
          disallow: '/site-mailer'
        }],
        output: '/robots.txt',
        sitemap: ''
      },
    },    
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
