import React, { PropTypes } from 'react'
import s from './TopBar.css'
import cx from 'classnames'

class TopBar extends React.Component {

  render() {
    return (
      <div className={s.topbar}>
        <div className={s.iconWrapper}>
          <i className={cx("fa fa-bars fa-2x", s.menuIcon)}
             onClick={this.props.toggleNav}></i>
        </div>
      </div>
    );
  }
}

export default TopBar;
