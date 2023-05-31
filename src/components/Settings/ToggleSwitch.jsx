import { useState } from 'react';
import classes from './ToggleSwitch.module.scss';

const ToggleSwitch = ({ toggled, onClick }) => {
  const [isToggled, toggle] = useState(toggled);

  const callback = () => {
    toggle(!isToggled);
    onClick(!isToggled);
  };

  return (
    <label className={classes.label}>
      <input className={classes.input} type="checkbox" defaultChecked={isToggled} onClick={callback} />
      <span className={classes.span} />
    </label>
  );
};

export default ToggleSwitch;
