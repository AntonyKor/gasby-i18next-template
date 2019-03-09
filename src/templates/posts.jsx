import React from "react";
import { withTranslation } from 'react-i18next';

import Layout from "../components/layout";

const Post = ({ pathContext, i18n }) => {
  if (i18n.language !== pathContext.locale) i18n.changeLanguage(pathContext.locale);
  return (
    <Layout path={pathContext.pathname}>
      <h1>{pathContext.title}</h1>
      <div dangerouslySetInnerHTML={{__html: pathContext.text}}></div>
      {pathContext.youtube && <iframe
        title={`${pathContext.title} youtube video`}
        width="560"
        height="315" 
        src={`https://www.youtube.com/embed/${pathContext.youtube}`} 
        frameBorder="0" 
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" 
        allowFullScreen
      ></iframe>}
      {pathContext.vimeo && <iframe 
        title={`${pathContext.title} vimeo video`}
        width="560"
        height="315" 
        src={`https://player.vimeo.com/video/${pathContext.vimeo}`}
        frameBorder="0" 
        allowFullScreen></iframe>}
    </Layout>
  )
}

export default withTranslation()(Post);
