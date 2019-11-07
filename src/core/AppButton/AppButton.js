import React from "react";
import PropTypes from "prop-types";
import classnames from "classnames";

import styles from "./appButton.module.scss";

const AppButton = ({ value, type, children, onClick, style }) => {
  return (
    <button
      onClick={onClick}
      type={type}
      className={classnames(styles.button, style)}
    >
      {value || children}
    </button>
  );
};

AppButton.propTypes = {
  value: PropTypes.string.isRequired,
  type: PropTypes.string,
  style: PropTypes.string,
  children: PropTypes.string,
  onClick: PropTypes.func
};

export default AppButton;
