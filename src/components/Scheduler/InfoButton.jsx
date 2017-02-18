import React, { Component, PropTypes } from 'react'
import cx from 'classnames'
import colors from '../../utils/colors'
import Popover from 'material-ui/Popover'
import FontIcon from 'material-ui/FontIcon'

export default class InfoButton extends Component {
  constructor(props) {
    super(props);
    this.state = {open: false};
  }

  handleClick(e) {
    console.log("handling click");
    // This prevents ghost click.
    event.preventDefault();

    this.setState({
      open: true,
      anchorEl: e.currentTarget
    })
  }

  handleRequestClose() {
    this.setState({open: false})
  }

  render() {
    return (
      <div>
        <FontIcon
          className="fa fa-info-circle"
          color={'white'}
          hoverColor={colors.PRIMARY}
          style={{marginRight: '10px'}}
          onClick={(e) => this.handleClick(e)}
        />
        <Popover
          open={this.state.open}
          anchorEl={this.state.anchorEl}
          anchorOrigin={{horizontal: 'right', vertical: 'top'}}
          targetOrigin={{horizontal: 'left', vertical: 'center'}}
          onRequestClose={() => this.handleRequestClose()}
          style={{maxWidth: '500px', padding: '5px'}}
        >
          <p>{this.props.text}</p>
        </Popover>
      </div>
    );
  }
}
