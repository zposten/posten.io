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
import s from './TopBar.css';

class TopBar extends React.Component {

  render() {
    return (
      <div className={s.topbar}>
        <button onClick={this.props.toggleNav}>show</button>
      </div>
    );
  }
}

export default TopBar;
