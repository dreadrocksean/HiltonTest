import React from "react";
import styles from "./Header.module.scss";
import Logo from "../../assets/images/SDlogo.png";
import LogoSmall from "../../assets/images/logo-small.png";
import withUnstated from "../../core/WithUnstated";

const appName = process.env.REACT_APP_APPNAME;
const appHost = `/${process.env.REACT_APP_HOST}`;

const AppBranding = ({
  style,
  store: {
    state: { sidebarMinimized }
  }
}) => (
  <a className={styles.branding} style={style} href={appHost}>
    <img src={sidebarMinimized ? LogoSmall : Logo} alt={`${appName} Logo`} />
  </a>
);

export default withUnstated(AppBranding);
