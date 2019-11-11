import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

import styles from "./Reservations.module.scss";

const Reservation = ({ hotel, date, id, showReservation }) => {
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
