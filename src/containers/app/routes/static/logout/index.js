import { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { logout } from '../../../../../modules/auth';

class Logout extends Component {
  componentWillMount() {
    this.props.logout();
    this.props.history.push('/');
  }

  render() {
    return null;
  }
}

const mapDispatchToProps = dispatch => bindActionCreators({ logout }, dispatch);

export default connect(null, mapDispatchToProps)(Logout);
