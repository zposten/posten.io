import React, { Component, PropTypes } from 'react'
import colors from '../../utils/colors'
import TextField from 'material-ui/TextField';


export default class TextBox extends Component {

  static propTypes = {
    label: PropTypes.string
  }

  render() {

    const styles = {
      errorStyle: {
        color: 'red',
      },
      underlineStyle: {
        borderColor: colors.TEXT,
      },
      underlineFocusStyle: {
        borderColor: colors.PRIMARY,
      },
      floatingLabelStyle: {
        color: colors.TEXT,
      },
      floatingLabelFocusStyle: {
        color: colors.PRIMARY,
      },
    };

    return (
         <TextField floatingLabelText={this.props.label}
                    floatingLabelStyle={styles.floatingLabelStyle}
                    floatingLabelFocusStyle={styles.floatingLabelFocusStyle}
                    underlineStyle={styles.underlineStyle}
                    underlineFocusStyle={styles.underlineFocusStyle}
                    />
    );
  }
}
