import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import classnames from "classnames";

import styles from "./Spinner.module.scss";

const Spinner = ({ style }) => (
  <FontAwesomeIcon
    icon="spinner"
    spin
    className={classnames(styles.loading, style)}
  />
);

export default Spinner;
