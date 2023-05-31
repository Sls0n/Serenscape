import React from 'react';
import { createPortal } from 'react-dom';

import classes from './Settings.module.scss';
import svg from '../../assets/svg/sprite.svg';
import ToggleSwitch from './ToggleSwitch';

const Settings = ({ open, closeFn }) => {
  if (!open) return null;

  const logState = (state) => {
    console.log('Toggled:', state);
  };

  return createPortal(
    <>
      <div open className={classes['modal']}>
        <div className={classes['modal__container']}>
          <div className={classes['modal__header']}>
            <div className={classes['modal__header-icon']}>
              <svg>
                <use href={`${svg}#icon-tool`}></use>
              </svg>
            </div>
            <h2 className={classes['modal__header-title']}>Settings</h2>
          </div>
          <div className={classes['modal__body']}>
            <div className={classes['modal__body-item']}>
              <h3 className={classes['modal__body-item-title']}>Dark mode</h3>
              <ToggleSwitch toggled={true} onClick={logState} />
            </div>

            <div className={classes['modal__body-item']}>
              <h3 className={classes['modal__body-item-title']}>Smaller sidebar</h3>
              <ToggleSwitch toggled={true} onClick={logState} />
            </div>
          </div>
          <div className={classes['modal__footer']}>
            <div className={classes['modal__footer-item']}>
              {/* <button className={classes['modal__footer-logOutBtn']} onClick={closeFn}>
                Log out
                <svg>
                  <use href={`${svg}#icon-log-out`}></use>
                </svg>
              </button> */}
            </div>

            <div className={classes['modal__footer-item']}>
              <button className={classes['modal__footer-logOutBtn']} onClick={closeFn}>
                Log out
                <svg>
                  <use href={`${svg}#icon-log-out`}></use>
                </svg>
              </button>
              <button className={classes['modal__footer-cancelBtn']} onClick={closeFn}>
                Close
                <svg>
                  <use href={`${svg}#icon-eye-off`}></use>
                </svg>
              </button>
              {/* 
              <button className={classes['modal__footer-saveBtn']} onClick={closeFn}>
                Save changes
              </button> */}
            </div>
          </div>
        </div>
      </div>
    </>,
    document.getElementById('settings-modal')
  );
};

export default Settings;
