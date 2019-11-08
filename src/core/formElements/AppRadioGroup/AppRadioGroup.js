import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';

import styles from './AppRadioGroup.module.scss';

const AppRadioGroup = ({ group, value, handleChange, id, style }) => (
  <div className={styles.root} key={id}>
    <FormControl component="fieldset" className={styles.formControl}>
      <FormLabel component="legend" className={styles.legend}>
        {group.label}
      </FormLabel>
      <RadioGroup
        aria-label={group.label}
        name={group.name}
        className={`${styles.group} ${group.values.length < 4 ? styles.row : styles.col}`}
        value={value}
        onChange={handleChange}
      >
        {group.values.map((field, i) => {
          const k = Object.keys(field)[0];
          return (
            <FormControlLabel
              disabled={field.disabled}
              className={classnames(styles.controlLabel, style)}
              key={i}
              value={k}
              control={<Radio />}
              label={field[k]}
            />
          );
        })}
      </RadioGroup>
    </FormControl>
  </div>
);

AppRadioGroup.propTypes = {
  handleChange: PropTypes.func.isRequired,
  group: PropTypes.object.isRequired,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]),
  style: PropTypes.object,
  id: PropTypes.number,
};

export default AppRadioGroup;
