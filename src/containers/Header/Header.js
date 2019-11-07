import React from "react";

import withUnstated from "../../core/WithUnstated";

import UserMenu from "./UserMenu";
import Navigation from "./Navigation";
import NavToggle from "./NavToggle";
import NavLinks from "./NavLinks";
import NavUnauthenticated from "./NavUnauthenticated";
import StatusMessage from "../StatusMessage";

import styles from "./Header.module.scss";

const mode = "Upgrade Your Reservation";

const Header = () => (
  <div className={styles.headerContainer}>
    <div className={styles.topBar}>
      <div style={{ display: "flex", height: "100%", alignItems: "center" }}>
        <div>{mode.toUpperCase()}</div>
      </div>
      <Navigation />
      <NavToggle />
    </div>
    <StatusMessage />
  </div>
);

export default withUnstated(Header);
