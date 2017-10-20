import React from 'react';
import Page from '../../components/page';
import BackgroundGradient from '../../components/background-gradient';

import './not-found.css';

export default () => (
  <Page
    title="Page Not Found"
    noCrawl
    id="not-found"
    className="header-margin-bump"
  >
    <BackgroundGradient animated />
    <h1>We can't find this page...</h1>
  </Page>
);
