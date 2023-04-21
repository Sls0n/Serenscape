import React from 'react';
// import { useContext } from 'react';

// import svg from '../../../assets/svg/sprite.svg';
import classes from './NavigationUp.module.scss';
// import NavContext from '../../../context/nav-context';

const NavigationUp = () => {
  // const { isOpen, setIsOpen } = useContext(NavContext);

  // const clickHandler = () => {
  //   setIsOpen(!isOpen);
  // };

  return (
    <div className={`${classes.aside__up} `}>
      {/* ${isOpen ? classes.close : ''} This goes in above div along with that class */}
      {/* <div className={classes['aside__up-menu']} onClick={clickHandler}>
        <svg className={classes.icon}>
          <use xlinkHref={`${svg}#icon-menu`} />
        </svg>
      </div> */}

      {/* {!isOpen ? <h1 className={classes['aside__up-logo']}>serenscape</h1> : null}
       */}
      <h1 className={classes['aside__up-logo']}> Serenscape</h1>
    </div>
  );
};

export default NavigationUp;
