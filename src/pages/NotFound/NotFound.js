import React from "react";

import styles from "./NotFound.module.scss";

const NotFound = () => (
  <div className={styles.notFound}>
    <h2>404 - Page Not Found</h2>
    <p>We are sorry but the page you are looking for does not exist.</p>
  </div>
);

export default NotFound;
