import React from "react";

import styles from "./Main.module.scss";

const Main = ({ children }) => <div className={styles.main}>{children}</div>;

export default Main;
