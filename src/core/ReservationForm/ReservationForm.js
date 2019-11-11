import React from "react";
import PropTypes from "prop-types";

import styles from "./ReservationForm.module.scss";
import TextInput from "../../core/formElements/TextInput";
import AppButton from "../../core/AppButton";
import { Grid } from "@material-ui/core";

const ReservationForm = ({ fields, handleChange, submit }) => (
  <form className={styles.root}>
    <Grid container spacing={3}>
      {Object.keys(fields).map((k, i) => (
        <Grid key={i} item xs={12} md={6} lg={3}>
          <TextInput
            fullWidth={true}
            style={{
              container: styles.inputContainer,
              input: styles.input,
              outline: styles.outline,
              label: styles.inputLabel
            }}
            type="text"
            handleChange={handleChange(k)}
            value={fields[k] || ""}
            fieldlabel={true}
            name={k}
            placeholder={k}
          />
        </Grid>
      ))}
    </Grid>
    <AppButton
      value="Update Reservation"
      onClick={submit}
      style={styles.submit}
    />
  </form>
);

ReservationForm.propTypes = {
  reservations: PropTypes.array,
  showReservation: PropTypes.func
};

export default ReservationForm;
