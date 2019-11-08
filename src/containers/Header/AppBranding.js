import React from "react";
import { Link } from "react-router-dom";
import styles from "./Header.module.scss";
import Logo from "../../assets/images/hiltonLogo2.png";
import withUnstated from "../../core/WithUnstated";

const appName = process.env.REACT_APP_APPNAME;
const appHost = `/${process.env.REACT_APP_HOST}`;

const AppBranding = ({ style }) => (
  <Link to={appHost} className={styles.branding} style={style}>
    <img src={Logo} alt={`${appName} Logo`} />
  </Link>
);

export default withUnstated(AppBranding);
