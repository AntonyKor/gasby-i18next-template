import React from "react";
import { withTranslation } from 'react-i18next';
import DOMPurify from 'dompurify';

import Layout from "../components/layout";

const Post = ({ pathContext, i18n }) => {
  if (i18n.language !== pathContext.locale) i18n.changeLanguage(pathContext.locale);
  return (
    <Layout path={pathContext.pathname}>
      <h1>{pathContext.title}</h1>
      <div dangerouslySetInnerHTML={{__html: DOMPurify.sanitize(pathContext.text)}}></div>
    </Layout>
  )
}

export default withTranslation()(Post);
