/**
 * React Static Boilerplate
 * https://github.com/kriasoft/react-static-boilerplate
 *
 * Copyright © 2015-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import React, { PropTypes } from 'react'
import s from './styles.css'
import { title, subtitle, html } from './home.md'
import Jumbotron from '../../components/Jumbotron/Jumbotron.jsx'

class HomePage extends React.Component {

  static propTypes = {
  };

  componentDidMount() {
    document.title = title;
  }

  render() {
    return (
      <div>
        <Jumbotron title={title} subtitle={subtitle} />
        <div className={s.content}>
          <div dangerouslySetInnerHTML={{ __html: html }} />
        </div>
      </div>
    );
  }

}

export default HomePage;
