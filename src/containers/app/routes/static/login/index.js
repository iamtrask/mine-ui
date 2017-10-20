import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { authenticateUser } from '../../../../../modules/auth';
import { Container, Row, Column } from '../../../components/grid';
import Page from '../../../components/page';
import BackgroundGradient from '../../../components/background-gradient';

import logo from '../../../assets/logo.svg';

import './login.css';

const LoginCard = props => (
  <div className="login-card">
    <Row>
      <Column sizes={{ small: 8, large: 6 }} offsets={{ small: 2, large: 3 }}>
        <img src={logo} alt="OpenMined" />
      </Column>
      <Column sizes={{ small: 12, large: 8 }} offsets={{ large: 2 }}>
        <input type="email" name="email" placeholder="Email Address" />
        <input type="password" name="password" placeholder="Password" />
      </Column>
      <Column sizes={{ small: 12 }}>
        <button className="black centered" onClick={props.authenticateUser}>
          Log In
        </button>
      </Column>
    </Row>
  </div>
);

const Login = props => (
  <Page id="login" title="Login">
    <BackgroundGradient animated />
    <Container>
      <Row>
        <Column sizes={{ small: 12, medium: 6 }} offsets={{ medium: 3 }}>
          <LoginCard {...this.props} />
        </Column>
      </Row>
    </Container>
  </Page>
);

const mapDispatchToProps = dispatch =>
  bindActionCreators({ authenticateUser }, dispatch);

export default connect(null, mapDispatchToProps)(Login);
