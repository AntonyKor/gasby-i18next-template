import React from "react";
import { useTranslation } from 'react-i18next';

import LanguageSelector from './language-selector';
import LocalizedLink from './localized-link';

const Header = ({ path }) => {
  const { t } = useTranslation();

  return (
    <header
      style={{
        background: `rebeccapurple`,
        marginBottom: `1.45rem`,
      }}
    >
      <div
        style={{
          margin: `0 auto`,
          maxWidth: 960,
          padding: `1.45rem 1.0875rem`,
        }}
      >
        <h1 style={{ margin: 0 }}>
          <LocalizedLink
            to="/"
            style={{
              color: `white`,
              textDecoration: `none`,
            }}
          >
            {t('test')}
          </LocalizedLink>
        </h1>
        <LanguageSelector path={path} />
      </div>
    </header>
  )
}

export default Header
