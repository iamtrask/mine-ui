import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { authenticateUser } from '../../../../../modules/auth';
import Page from '../../../components/page';
import BackgroundGradient from '../../../components/background-gradient';

const Login = props => (
  <Page id="login" title="Login">
    <BackgroundGradient animated />
    <h1>Login</h1>
    <button onClick={props.authenticateUser}>Log me in Scotty!</button>
  </Page>
);

const mapDispatchToProps = dispatch =>
  bindActionCreators({ authenticateUser }, dispatch);

export default connect(null, mapDispatchToProps)(Login);
