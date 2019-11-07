import React from "react";

import PageContent from "../PageContent";

import styles from "./PageContainer.module.scss";

const PageContainer = () => (
  <div className={styles.pageContainer}>
    <PageContent />
  </div>
);

export default PageContainer;
