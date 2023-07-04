import { useContext } from 'react';

import svg from '../../../assets/svg/sprite.svg';
import classes from './NavigationUpMobile.module.scss';
import NavContext from '../../../context/nav-context';

const NavigationUpMobile = () => {
  const { isMobile, setIsMobile } = useContext(NavContext);

  return (
    <div className={classes['aside__up']}>
      <button
        onClick={(e) => {
          e.preventDefault();
          setIsMobile(!isMobile);
        }}
        className={classes['aside__up-menu']}>
        <svg className={classes.icon}>
          <use xlinkHref={`${svg}#icon-x`} />
        </svg>
      </button>
    </div>
  );
};

export default NavigationUpMobile;
