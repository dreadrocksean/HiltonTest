import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import { Grid, Button } from "@material-ui/core";

import withUnstated from "../../core/WithUnstated";
import { formattedTechnicianData } from "../../utils";
import AutoComplete from "../AutoComplete";

import styles from "./submitForm.module.scss";

class SubmitForm extends PureComponent {
  state = {
    edit: false
  };

  componentDidMount() {
    // this.props.getAllOptions();
  }

  componentDidUpdate() {
    if (this.props.selectedOption === "") {
      this.setState({ selectedOption: "Choose A Technician" });
    }
  }

  render() {
    const { onChange, selectedOption, onSubmit, submitted } = this.props;
    const {
      state: {
        tech: { loading, technicians },
        equipment: { itemList }
      }
    } = this.props.store;
    return (
      <Grid container spacing={24} className={styles.container}>
        <Grid item xs={12} sm={6} className={styles.containerItem}>
          <AutoComplete
            selectedOption={selectedOption}
            onChange={onChange}
            options={formattedTechnicianData(technicians)}
            loading={loading}
            loadingText="Loading list . . ."
            placeholder="Choose technician"
          />
          <Button
            className={styles.submitContainer}
            onClick={onSubmit(itemList)}
            disabled={
              submitted || !(selectedOption.value && (itemList || []).length)
            }
            size="large"
            color="primary"
          >
            Submit
          </Button>
        </Grid>
      </Grid>
    );
  }
}

SubmitForm.propTypes = {
  loading: PropTypes.object,
  error: PropTypes.object,
  selectedOption: PropTypes.object,
  onChange: PropTypes.func,
  onSubmit: PropTypes.func,
  technicians: PropTypes.array,
  getAllOptions: PropTypes.func,
  submitted: PropTypes.bool
};

export default withUnstated(SubmitForm);
