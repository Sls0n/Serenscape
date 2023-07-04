import React, { useContext } from 'react';

import NavigationMiddle from './NavigationMiddle/NavigationMiddle';
import NavigationUpMobile from './NavigationUp/NavigationUpMobile';
import classes from './NavigationMobile.module.scss';
import NavContext from '../../context/nav-context';

const NavigationMobile = () => {
  const { isMobile, setIsMobile } = useContext(NavContext);

  const handleOverlayClick = (event) => {
    if (event.target.tagName !== 'ASIDE') {
      event.stopPropagation();
      event.preventDefault();

      setIsMobile(!isMobile);
    }
  };

  return (
    <>
      {isMobile && (
        <div
          onClick={handleOverlayClick}
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            zIndex: 9999,
            backgroundColor: 'rgba(0, 0, 0, 0.5)',
          }}
        />
      )}
      <aside
        style={{
          transform: isMobile ? 'translateX(0)' : 'translateX(-30rem)',
          transition: 'transform 0.3s ease-in-out',
          zIndex: 10000,
        }}
        className={classes.aside}>
        <NavigationUpMobile />
        <NavigationMiddle showUploadBtn={false} showSettings={false} />
      </aside>
    </>
  );
};

export default NavigationMobile;
