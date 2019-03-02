import React from "react";
import { withTranslation } from 'react-i18next';
import { graphql } from 'gatsby';

import Layout from "../components/layout";
import LocalizedLink from '../components/localized-link';

const SecondPage = ({ pathContext, t, i18n, data }) => {
  if (i18n.language !== pathContext.locale) i18n.changeLanguage(pathContext.locale);
  return (
    <Layout path={pathContext.pathname}>
      <ul>
        {data.allContentfulPosts.edges
          .filter(({ node: { node_locale } }) => node_locale === i18n.language)
          .map(({ node }) => <li key={node.slug}><LocalizedLink to={`/posts/${node.slug}`}>{node.title}</LocalizedLink></li>)}
      </ul>
      <LocalizedLink to="/">{t('Go back to the homepage')}</LocalizedLink>
    </Layout>
  )
}

export default withTranslation()(SecondPage);

export const postsQuery = graphql`
  {
    allContentfulPosts {
      edges {
        node {
          title
          slug
          node_locale
        }
      }
    }
  }
`