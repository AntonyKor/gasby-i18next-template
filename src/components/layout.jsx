import React from 'react';
import PropTypes from 'prop-types';
// import { useTranslation } from 'react-i18next';

import Header from './header';
import './i18next';
import './layout.css';  

const Layout = ({ children, path }) => {
  return (
    <React.Fragment>
      <Header path={path} />
      <div
        style={{
          margin: `0 auto`,
          maxWidth: 960,
          padding: `0px 1.0875rem 1.45rem`,
          paddingTop: 0,
        }}
      >
        <main>{children}</main>
        <footer>
          © {new Date().getFullYear()}
          {` `}
          <a href="https://www.gatsbyjs.org">Gatsby</a>
        </footer>
      </div>
    </React.Fragment>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  path: PropTypes.string.isRequired,
}

export default Layout;
