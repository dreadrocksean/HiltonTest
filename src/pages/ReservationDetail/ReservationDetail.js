import PropTypes from "prop-types";
import React, { useState } from "react";
import { compose } from "recompose";
// import { graphql } from "react-apollo";

import {
  getReservationQuery,
  getReservationsQuery,
  addReservationMutation
} from "../../queries/queries";
import styles from "./ReservationDetail.module.scss";
import ReservationForm from "../../core/ReservationForm";
import Spinner from "../../core/Spinner";

const ReservationDetail = ({ getReservationQuery }) => {
  const [state, setState] = useState({
    dateCreated: "",
    guestName: "",
    hotelName: "",
    arrivalDate: "",
    departureDate: ""
  });

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
      {getReservationQuery.loading ? (
        <Spinner style={styles.spinner} />
      ) : (
        <ReservationForm
          fields={getReservationQuery.reservation}
          handleChange={handleChange}
          submit={addReservation}
        />
      )}
    </div>
  );
};

ReservationDetail.propTypes = {
  classes: PropTypes.object,
  route: PropTypes.string,
  name: PropTypes.string
};

export default compose(
  getReservationQuery,
  getReservationsQuery,
  addReservationMutation
)(ReservationDetail);
