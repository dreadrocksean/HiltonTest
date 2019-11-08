import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { Grid } from "@material-ui/core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import withUnstated from "../../core/WithUnstated";
import { compose } from "recompose";

import Reservation from "./Reservation";
import ReservationForm from "../../core/ReservationForm";

import {
  getReservationsQuery,
  addReservationMutation
} from "../../queries/queries";
import { dynamicSort } from "../../utils";

import styles from "./Reservations.module.scss";

const Reservations = ({
  store,
  getReservationsQuery,
  addReservationMutation
}) => {
  useEffect(() => {
    if (!getReservationsQuery.reservations) return;
    store.setState({
      reservations: dynamicSort(
        getReservationsQuery.reservations,
        "createdAt",
        -1
      )
    });
  }, [getReservationsQuery.reservations, store]);

  const [state, setState] = useState({
    guestName: "",
    hotelName: "",
    arrivalDate: "",
    departureDate: ""
  });

  const showReservation = id => () => {
    const reservation = store.state.reservations.find(v => v._id === id);
    console.log(reservation);
  };

  const handleChange = name => evt => {
    setState({ ...state, [name]: evt.target.value });
  };

  const addReservation = () => {
    addReservationMutation({
      variables: {
        guestName: state.guestName,
        hotelName: state.hotelName,
        arrivalDate: state.arrivalDate,
        departureDate: state.departureDate
      },
      refetchQueries: [{ query: getReservationsQuery }]
    });
  };

  return (
    <div className={styles.root}>
      <h2>Reservations</h2>
      <div className={styles.listContainer}>
        <header>
          <div>Hotel Name</div>
          <div>Arrival Date</div>
        </header>
        <div className={styles.list}>
          {store.state.reservations.length ? (
            store.state.reservations.map(v => (
              <Reservation
                key={v._id}
                showReservation={showReservation(v._id)}
                hotel={v.hotelName}
                date={v.arrivalDate}
                id={v._id}
              />
            ))
          ) : (
            <h2 className={styles.loading}>Loading Reservation List . . .</h2>
          )}
        </div>
      </div>
      <ReservationForm
        fields={state}
        handleChange={handleChange}
        submit={addReservation}
      />
    </div>
  );
};

Reservations.propTypes = {
  classes: PropTypes.object,
  route: PropTypes.string,
  name: PropTypes.string
};

export default compose(
  getReservationsQuery,
  addReservationMutation
)(withUnstated(Reservations));
