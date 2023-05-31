import React from 'react';

import svg from '../../assets/svg/sprite.svg';
import classes from './BackButton.module.scss';
import { Link, useNavigate } from 'react-router-dom';

const BackButton = () => {
  const navigate = useNavigate();

  return (
    <Link
      onClick={() => {
        navigate(-1);
      }}
      className={classes.arrow}>
      <svg className={classes.arrowSvg}>
        <use xlinkHref={`${svg}#icon-chevron-left`}></use>
      </svg>
    </Link>
  );
};

export default BackButton;
