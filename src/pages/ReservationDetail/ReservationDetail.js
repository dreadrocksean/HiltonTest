import PropTypes from "prop-types";
import React, { useEffect } from "react";
import { compose } from "recompose";

import withUnstated from "../../core/WithUnstated";
import * as queries from "../../queries";
import styles from "./ReservationDetail.module.scss";
import ReservationForm from "../../core/ReservationForm";
import LoaderBar from "../../core/LoaderBar";

const ReservationDetail = ({
  store,
  getReservationQuery: { reservation, loading },
  editReservationMutation,
  deleteReservationMutation
}) => {
  useEffect(() => {
    if (!reservation) return;
    store.setState({
      currReservation: reservation
    });
  }, [reservation, store]);

  const handleChange = name => evt => {
    store.setState({
      currReservation: {
        ...store.state.currReservation,
        [name]: evt.target.value
      }
    });
  };

  const updateReservation = async evt => {
    evt.preventDefault();
    try {
      await editReservationMutation({
        variables: {
          _id: store.state.currReservation._id,
          guestName: store.state.currReservation.guestName,
          hotelName: store.state.currReservation.hotelName,
          arrivalDate: store.state.currReservation.arrivalDate,
          departureDate: store.state.currReservation.departureDate
        },
        refetchQueries: [{ query: queries.getReservationGQL }]
      });
    } catch (e) {
      console.log("error: ", e);
    }
  };

  const deleteReservation = async evt => {
    try {
      await deleteReservationMutation({
        variables: {
          _id: store.state.currReservation._id
        },
        refetchQueries: [{ query: queries.getReservationsGQL }]
      });
    } catch (e) {
      console.log("error: ", e);
    }
  };

  return (
    <div className={styles.root}>
      {!store.state.currReservation ? (
        <LoaderBar />
      ) : (
        <ReservationForm
          fields={store.state.currReservation}
          handleChange={handleChange}
          submit={updateReservation}
          type="Update"
          remove={deleteReservation}
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
  queries.getReservationQuery,
  queries.editReservationMutation,
  queries.deleteReservationMutation
)(withUnstated(ReservationDetail));
