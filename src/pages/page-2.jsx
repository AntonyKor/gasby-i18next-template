import React from "react";
import { withTranslation } from 'react-i18next';

import Layout from "../components/layout";
import LocalizedLink from '../components/localized-link';

const SecondPage = ({ pathContext, t, i18n }) => {
  if (i18n.language !== pathContext.locale) i18n.changeLanguage(pathContext.locale);
  return (
    <Layout path={pathContext.pathname}>
      <h1>{t('Hi from the second page')}</h1>
      <p>{t('Welcome to page 2')}</p>
      <LocalizedLink to="/">{t('Go back to the homepage')}</LocalizedLink>
    </Layout>
  )
}

export default withTranslation()(SecondPage)
