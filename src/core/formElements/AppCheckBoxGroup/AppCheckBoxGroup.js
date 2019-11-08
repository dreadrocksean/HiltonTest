import React from 'react';
import PropTypes from 'prop-types';
// import classnames from 'classnames';
import Checkbox from '@material-ui/core/Checkbox';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';

import styles from './AppCheckBoxGroup.module.scss';

const AppCheckBoxGroup = ({ group, value, handleChange, id, style }) => (
  <div className={styles.root} key={id}>
    <FormControl component="fieldset" className={styles.formControl}>
      <FormLabel component="legend" className={styles.legend}>
        {group.label}
      </FormLabel>
      <FormGroup className={styles.formGroup}>
        {group.values.map((field, i) => {
          const k = Object.keys(field)[0];
          const checked = value.includes(k);
          return (
            <FormControlLabel
              key={i}
              control={<Checkbox checked={checked} onChange={handleChange(k)} value={k} />}
              label={field.label}
              className={styles.root}
              classes={{ root: style }}
            />
          );
        })}
      </FormGroup>
    </FormControl>
  </div>
);

AppCheckBoxGroup.propTypes = {
  handleChange: PropTypes.func.isRequired,
  group: PropTypes.object.isRequired,
  value: PropTypes.array,
  style: PropTypes.object,
  id: PropTypes.number,
};

export default AppCheckBoxGroup;
