const path = require(`path`);

const languages = {
  ru: {
    path: 'ru',
    title: 'Русский',
    default: true,
  },
  en: {
    path: 'en',
    title: 'English',
  }
}

function getPath(slug, lang, prefix = '') {
  return languages[lang].default
    ? prefix + slug
    : languages[lang].path + prefix + slug;
}

exports.onCreatePage = ({ page, actions }) => {
  const { createPage, deletePage } = actions

  return new Promise(resolve => {
    deletePage(page)

    Object.keys(languages).map(lang => createPage({
        ...page,
        path: getPath(page.path, lang),
        context: {
          locale: lang,
          pathname: page.path,
        }
      }));

    resolve()
  })
}

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions;

  return graphql(`
    {
      allContentfulPosts {
        edges {
          node {
            id
            title
            slug
            youtube
            vimeo
            textmd {
              childMarkdownRemark {
                html
              }
            }
            node_locale
          }
        }
      }
    }
  `
  ).then(result => {
    result.data.allContentfulPosts.edges.forEach(({ node }) => {
      createPage({
        path: getPath(node.slug, node.node_locale, '/posts/'),
        component: path.resolve('./src/templates/posts.jsx'),
        context: {
          pathname: `/posts/${node.slug}`,
          title: node.title,
          text: node.textmd.childMarkdownRemark.html,
          locale: node.node_locale,
          youtube: node.youtube,
          vimeo: node.vimeo,
        },
      })
    })
  })
}