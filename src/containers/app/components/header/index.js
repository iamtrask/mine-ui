import React, { Component } from 'react';

import { Link } from 'react-router-dom';

import logo from '../../assets/logo.svg';

import './header.css';

import links from './links';

const validLink = (authenticated, link) => {
  return (
    (authenticated && link.authRequired) ||
    (!authenticated && link.unauthRequired) ||
    (!link.authRequired && !link.unauthRequired)
  );
};

const activeLink = (to, current) => (to === current ? 'active ' : '');

const isTransparent = page => page === '/';

const headerSpecialClass = (page, scrolled, theClass) => {
  if (isTransparent(page) && !scrolled) {
    return theClass;
  }

  return '';
};

const Title = () => (
  <div className="title">
    <Link to="/">
      <img src={logo} alt="OpenMined" />
    </Link>
  </div>
);

const Hamburger = props => (
  <div
    className={'nav-icon' + (props.isToggled ? ' open' : '')}
    onClick={props.toggleMenu}
  >
    <span />
    <span />
    <span />
    <span />
  </div>
);

const Navigation = props => (
  <div className={'navigation ' + (props.isToggled ? 'open' : '')}>
    {['left', 'right'].map(key => {
      return (
        <div className={key + '-menu'} key={key + '-menu'}>
          {links[key].map(link => {
            let classes = activeLink(link.to, props.currentPage);

            if (link.button) {
              classes += 'button ';
              classes += headerSpecialClass(
                props.currentPage,
                props.isScrolled,
                'white'
              );
            }

            if (typeof link.to === 'string') {
              return (
                validLink(props.isAuthenticated, link) && (
                  <Link to={link.to} key={link.name} className={classes}>
                    {link.name}
                  </Link>
                )
              );
            } else {
              return (
                validLink(props.isAuthenticated, link) && (
                  <a onClick={link.to} key={link.name} className={classes}>
                    {link.name}
                  </a>
                )
              );
            }
          })}
        </div>
      );
    })}
  </div>
);

class Header extends Component {
  constructor(props) {
    super(props);

    this.state = {
      mobileToggled: false,
      isScrolled: false
    };

    this.toggleMenu = this.toggleMenu.bind(this);
    this.handleScroll = this.handleScroll.bind(this);
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }

  toggleMenu() {
    this.setState({
      mobileToggled: !this.state.mobileToggled
    });
  }

  handleScroll() {
    if (window.scrollY > 0 && !this.state.isScrolled) {
      this.setState({
        isScrolled: true
      });
    } else if (window.scrollY === 0 && this.state.isScrolled) {
      this.setState({
        isScrolled: false
      });
    }
  }

  render() {
    return (
      <div
        id="header"
        className={headerSpecialClass(
          this.props.currentPage,
          this.state.isScrolled,
          'transparent'
        )}
      >
        <Title />
        <Hamburger
          isToggled={this.state.mobileToggled}
          toggleMenu={this.toggleMenu}
        />
        <Navigation
          isToggled={this.state.mobileToggled}
          isScrolled={this.state.isScrolled}
          {...this.props}
        />
      </div>
    );
  }
}

export default Header;
