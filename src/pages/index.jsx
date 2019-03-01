import React from "react";
import { withTranslation } from 'react-i18next';

import Layout from "../components/layout";
import Image from "../components/image";
import LocalizedLink from '../components/localized-link';

const IndexPage = ({ pathContext, t, i18n }) => {
  if (i18n.language !== pathContext.locale) i18n.changeLanguage(pathContext.locale);
  return (
    <Layout path={pathContext.pathname}>
      <h1>{t('Hi people')}</h1>
      <p>{t('Welcome to your new Gatsby site')}</p>
      <p>{t('Now go build something great')}</p>
      <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
        <Image />
      </div>
      <LocalizedLink to="/page-2/">{t('Go to page')} 2</LocalizedLink>
    </Layout>
  )
}

export default withTranslation()(IndexPage);
