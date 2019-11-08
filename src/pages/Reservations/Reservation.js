import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

// import { getReservationQuery } from "../../data/queries/queries";
import styles from "./Reservations.module.scss";

const Reservation = ({ hotel, date, id, showReservation }) => {
  const goToDetail = () => {};

  return (
    <Link
      className={styles.row}
      to={`/${process.env.REACT_APP_HOST}/reservation/${id}`}
    >
      <div>{hotel}</div>
      <div>{date}</div>
    </Link>
  );
};

Reservation.propTypes = {
  reservations: PropTypes.array,
  showReservation: PropTypes.func
};

export default Reservation;
// export default getReservationQuery(Reservation);