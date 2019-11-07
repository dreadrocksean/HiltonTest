import PropTypes from "prop-types";
import React, { useEffect, useState } from "react";
import { compose } from "recompose";
import NotificationsIcon from "@material-ui/icons/Notifications";

import Sortable from "../../core/Tables/Sortable";
import withUnstated from "../../core/WithUnstated";
import TableRow from "../../core/_Common/TableRow";
import TableToolBar from "../../core/_Common/TableToolBar";

import { getReservationQuery } from "../../data/queries/queries";

import styles from "./Reservation.module.scss";

const Reservation = ({ store, getReservationQuery }) => {
  const addReservation = () => {}; // Decide clear store vs db
  console.log("getReservationQuery: ", getReservationQuery);

  return getReservationQuery.loading ? (
    <h2 className={styles.loading}>Loading Events...</h2>
  ) : (
    <Sortable
      rows={getReservationQuery.locations}
      component={TableRow}
      tableToolBar={TableToolBar}
      title="Door Open"
      icon={NotificationsIcon}
    />
  );
};

Reservation.propTypes = {
  classes: PropTypes.object,
  route: PropTypes.string,
  name: PropTypes.string
};

export default compose(getReservationQuery)(withUnstated(Reservation));
