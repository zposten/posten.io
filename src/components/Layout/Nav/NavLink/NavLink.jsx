import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';
import s from './NavLink.css';
import cx from 'classnames';

export default class NavLink extends Component {

  static propTypes = {
    to: PropTypes.oneOfType([PropTypes.string, PropTypes.object]).isRequired,
  };

  render() {
    return <Link {...this.props}
                 className={s.navlink}
                 activeClassName={s.active}
                 >{this.props.children}</Link>;
  }

}
