import React, { Component } from "react";
import PropTypes from "prop-types";
import classnames from "classnames";
import { TextField } from "@material-ui/core";
import FormLabel from "@material-ui/core/FormLabel";

import styles from "./textInput.module.scss";

class TextInput extends Component {
  constructor(props) {
    super(props);
    this.state = {
      validating: false
    };
  }

  handleBlur = () => this.setState({ validating: true });

  handleChange = e => this.props.handleChange(e, this.props.type);

  getName = () => {
    return this.props.name.replace(/\b\w/g, l => l.toUpperCase()) || "";
  };

  render() {
    const {
      value,
      fullWidth,
      fieldlabel,
      hidden,
      style = {},
      type,
      autoComplete,
      legend,
      multiline,
      rows,
      placeholder
    } = this.props;
    const fieldName =
      this.props.name.replace(/\b\w/g, l => l.toUpperCase()) || "";

    return (
      <div className={classnames(styles.textInput, style.container)}>
        <FormLabel
          component="legend"
          className={classnames(styles.legend, style.legend)}
        >
          {legend}
        </FormLabel>
        <TextField
          fullWidth={fullWidth !== false}
          multiline={multiline}
          rows={rows}
          type={type}
          label={fieldlabel ? fieldName : ""}
          placeholder={placeholder || fieldName}
          format={type}
          autoComplete={autoComplete}
          value={value}
          onChange={this.handleChange}
          onBlur={this.handleBlur}
          hidden={hidden}
          variant="outlined"
          inputProps={{ className: style.input }}
          InputProps={{ className: classnames(style.outline, style.textArea) }}
          InputLabelProps={{ style: style.inputLabel }}
        />
      </div>
    );
  }
}

TextInput.propTypes = {
  type: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
  fieldlabel: PropTypes.bool,
  hidden: PropTypes.bool,
  fullWidth: PropTypes.bool,
  name: PropTypes.string,
  legend: PropTypes.string,
  multiline: PropTypes.bool,
  rows: PropTypes.number,
  placeholder: PropTypes.string,
  validator: PropTypes.string,
  style: PropTypes.object
};

export default TextInput;
