import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
// import { Grid } from "@material-ui/core";
import withUnstated from "../../core/WithUnstated";
import { compose } from "recompose";

import Reservation from "./Reservation";
import ReservationForm from "../../core/ReservationForm";
import Spinner from "../../core/Spinner";

import * as queries from "../../queries";
import { dynamicSort, filterErrorMessage } from "../../utils";

import styles from "./Reservations.module.scss";

const Reservations = ({
  store,
  getReservationsQuery: { reservations, loading },
  addReservationMutation
}) => {
  useEffect(() => {
    if (!reservations) return;
    store.setState({
      reservations: dynamicSort(reservations, "createdAt", -1)
    });
  }, [reservations, store]);

  const initFields = {
    guestName: "",
    hotelName: "",
    arrivalDate: "",
    departureDate: ""
  };

  const [state, setState] = useState(initFields);

  const [errors, setErrors] = useState([]);

  const showReservation = id => () => {
    const reservation = store.state.reservations.find(v => v._id === id);
    console.log(reservation);
  };

  const handleChange = name => evt => {
    setState({ ...state, [name]: evt.target.value });
  };

  const addReservation = async evt => {
    evt.preventDefault();
    try {
      await addReservationMutation({
        variables: {
          guestName: state.guestName,
          hotelName: state.hotelName,
          arrivalDate: state.arrivalDate,
          departureDate: state.departureDate
        },
        refetchQueries: [{ query: queries.getReservationsGQL }]
      });
      setState(initFields);
    } catch (e) {
      setErrors([e.message]);
    }
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
          {!loading ? (
            store.state.reservations.length ? (
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
              <h3 className={styles.listMessage}>
                Add new reservations with the form below
              </h3>
            )
          ) : (
            <Spinner />
          )}
        </div>
      </div>
      <ReservationForm
        fields={state}
        handleChange={handleChange}
        submit={addReservation}
        type="Add"
      />
      {errors.map((error, i) => (
        <div className={styles.error} key={i}>
          {filterErrorMessage(error)}
        </div>
      ))}
    </div>
  );
};

Reservations.propTypes = {
  store: PropTypes.object,
  getReservationsQuery: PropTypes.object,
  addReservationMutation: PropTypes.func,
  route: PropTypes.string
};

export default compose(
  queries.getReservationsQuery,
  queries.addReservationMutation
)(withUnstated(Reservations));
