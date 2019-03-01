import { navigate } from "gatsby";
import React from "react";
import { useTranslation } from 'react-i18next';

import { languages } from '../locales';
const langs = Object.keys(languages);

const LanguageSelector = ({ path }) => {
  const { i18n, } = useTranslation();

  return (
    <select onChange={async e => {
        const lang = e.currentTarget.value;
        const localizedPath = languages[lang].default
          ? path
          : languages[lang].path + path;
        navigate(localizedPath);
      }} value={i18n.language}>
      {langs.map(lang => <option key={lang} value={lang}>{languages[lang].title}</option>)}
    </select>
  )
}

export default LanguageSelector;
