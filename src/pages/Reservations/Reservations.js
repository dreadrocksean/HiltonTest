import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { Grid } from "@material-ui/core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import withUnstated from "../../core/WithUnstated";
import { compose } from "recompose";

import { getReservationsQuery } from "../../data/queries/queries";

import styles from "./Reservations.module.scss";

const Reservations = ({ store, getReservationsQuery }) => {
  useEffect(() => {
    store.setState({ reservations: getReservationsQuery.reservations });
  }, [getReservationsQuery.reservations, store]);

  return (
    <div className={styles.root}>
      <h2>Reservations</h2>
      {store.state.reservations &&
        store.state.reservations.map((v, i) => (
          <div key={i}>{v.guestName}</div>
        ))}
    </div>
  );
};

Reservations.propTypes = {
  classes: PropTypes.object,
  route: PropTypes.string,
  name: PropTypes.string
};

export default compose(getReservationsQuery)(withUnstated(Reservations));
