import React, { useState } from "react";
import PropTypes from "prop-types";
import classnames from "classnames";
import {
  Card,
  CardActions,
  CardHeader,
  CardMedia,
  CardContent,
  Collapse,
  Avatar,
  IconButton,
  Typography
} from "@material-ui/core";

import AppButton from "../AppButton";

import styles from "./appCard.module.scss";
import contentStyles from "./AppCardContent.module.scss";

const AppCard = ({
  style,
  typeColor,
  title,
  subtitle,
  actionTitle,
  action,
  children
}) => {
  // const [close, setClose] = useState(false);
  // const handleClose = () => setClose(true);

  return (
    <Card
      className={classnames(styles.root, style)}
      style={{ borderTop: `solid 3px ${typeColor}` }}
    >
      <div className={styles.headerWrapper}>
        <CardHeader
          title={title}
          classes={{ title: styles.headerTitle }}
          subheader={subtitle}
          className={styles.header}
        />
        <AppButton style={styles.action} onClick={action} value={actionTitle} />
      </div>

      <CardContent className={contentStyles.root}>{children}</CardContent>
    </Card>
  );
};

AppCard.propTypes = {
  style: PropTypes.string,
  title: PropTypes.string,
  subtitle: PropTypes.string,
  actionTitle: PropTypes.string,
  action: PropTypes.func,
  children: PropTypes.oneOfType([PropTypes.array, PropTypes.object])
};

export default AppCard;
