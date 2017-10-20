import React from 'react';
import Page from '../../components/page';
import { Container, Row, Column } from '../../components/grid';

import './not-found.css';

export default () => (
  <Page
    title="Page Not Found"
    noCrawl
    id="not-found"
    className="header-margin-bump"
  >
    <Container className="not-found-container">
      <Row>
        <Column sizes={{ small: 12 }}>
          <h1>We can't find this page!</h1>
        </Column>
      </Row>
    </Container>
  </Page>
);
