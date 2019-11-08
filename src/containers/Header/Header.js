import React from "react";

import withUnstated from "../../core/WithUnstated";

import AppBranding from "./AppBranding";
import styles from "./Header.module.scss";

const text = "Upgrade Your Reservation";

const Header = () => (
  <div className={styles.root}>
    <AppBranding />
    <div>{text}</div>
  </div>
);

export default withUnstated(Header);
