import React from "react";
import PropTypes from "prop-types";
import classnames from "classnames";
import { Link } from "react-router-dom";

import styles from "./ReservationForm.module.scss";
import TextInput from "../../core/formElements/TextInput";
import AppButton from "../../core/AppButton";
import { Grid } from "@material-ui/core";

const ReservationForm = ({
  fields,
  handleChange,
  submit,
  remove,
  type = "submit"
}) => (
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
      value={`${type} Reservation`}
      onClick={submit}
      style={styles.submit}
    />
    {remove && (
      <Link to={`/${process.env.REACT_APP_HOST}`}>
        <AppButton
          value={`Delete`}
          onClick={remove}
          style={classnames(styles.submit, styles.remove)}
        />
      </Link>
    )}
  </form>
);

ReservationForm.propTypes = {
  fields: PropTypes.object,
  handleChange: PropTypes.func,
  submit: PropTypes.func,
  type: PropTypes.string
};

export default ReservationForm;
