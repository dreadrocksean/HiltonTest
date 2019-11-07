import React from "react";
import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Grid } from "@material-ui/core";

import StatusMessage from "../../containers/StatusMessage";
import { StatusMessageEnum as Enum } from "../../utils";
import withUnstated from "../../core/WithUnstated";

import DashboardItem from "./DashboardItem";
import DashboardTable from "./DashboardTable";
import styles from "./Dashboard.module.scss";

const Dashboard = ({
  style,
  store: {
    toggleSidebar,
    setState,
    state,
    auth: { error }
  }
}) => {
  if (error) {
    return <StatusMessage level={Enum.ERROR}>Error logging out</StatusMessage>;
  }
  // setState({ sidebarMinimized: false });
  // toggleSidebar();

  const getSections = () => (
    <Grid container spacing={4} className={styles.grid}>
      {devices.map((device, i) => (
        <Grid item key={i} xs={12} sm={6} md={3}>
          <DashboardItem
            deviceProps={{
              route: device.route,
              title: state.deviceModes[device.mode].count,
              subTitle: device.name,
              icon: device.icon,
              color: device.color
            }}
          />
        </Grid>
      ))}
    </Grid>
  );
  return (
    <div className={styles.dashboard} style={style}>
      <header>
        <span>
          <FontAwesomeIcon icon="coffee" />
        </span>
        Dashboard
      </header>
      {getSections()}
      <DashboardTable title="Recent Events" />
    </div>
  );
};

Dashboard.propTypes = {
  style: PropTypes.object
};

export default withUnstated(Dashboard);
