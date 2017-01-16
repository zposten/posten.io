/**
 * React Static Boilerplate
 * https://github.com/kriasoft/react-static-boilerplate
 *
 * Copyright © 2015-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import React, { PropTypes } from 'react';
import { Link } from 'react-router';
import s from './NavLink.css';
import cx from 'classnames';

class NavLink extends React.Component {

  static propTypes = {
    to: PropTypes.oneOfType([PropTypes.string, PropTypes.object]).isRequired,
  };

  constructor(props) {
    super(props);
    this.state = {active: false};
  }

  toggleActive() {
    this.setState({active: !this.state.active});
  }

  render() {
    const { to, ...props } = this.props;
    return <Link to={to}
                 className={cx(s.navlink, (this.state.active ? "active" : ""))}
                 onClick={this.toggleActive}
                 >{props.children}</Link>;
  }

}

export default NavLink;
