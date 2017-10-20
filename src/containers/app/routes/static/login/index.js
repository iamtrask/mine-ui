import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { authenticateUser } from '../../../../../modules/auth';
import { Container, Row, Column } from '../../../components/grid';
import Page from '../../../components/page';
import BackgroundGradient from '../../../components/background-gradient';

import logo from '../../../assets/logo.svg';

import './login.css';

const LoginCard = ({ state, change, submit }) => (
  <div className="login-card">
    <Row>
      <Column sizes={{ small: 8, large: 6 }} offsets={{ small: 2, large: 3 }}>
        <img src={logo} alt="OpenMined" />
      </Column>
      <Column sizes={{ small: 12, large: 8 }} offsets={{ large: 2 }}>
        <input
          type="email"
          name="email"
          defaultValue={state.email}
          onChange={change}
          placeholder="Email Address"
        />
        <input
          type="password"
          name="password"
          defaultValue={state.password}
          onChange={change}
          placeholder="Password"
        />
      </Column>
      <Column sizes={{ small: 12 }}>
        <button className="black centered" onClick={submit}>
          Log In
        </button>
      </Column>
    </Row>
  </div>
);

class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: ''
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleSubmit() {
    this.props.authenticateUser(this.state);
  }

  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  render() {
    return (
      <Page id="login" title="Login">
        <BackgroundGradient animated />
        <Container>
          <Row>
            <Column sizes={{ small: 12, medium: 6 }} offsets={{ medium: 3 }}>
              <LoginCard
                state={this.state}
                change={this.handleChange}
                submit={this.handleSubmit}
              />
              <p className="small-text">Decentralized. Democratized. Data.</p>
            </Column>
          </Row>
        </Container>
      </Page>
    );
  }
}

const mapDispatchToProps = dispatch =>
  bindActionCreators({ authenticateUser }, dispatch);

export default connect(null, mapDispatchToProps)(Login);
