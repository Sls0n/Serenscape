import { createPortal } from 'react-dom';
import { motion, AnimatePresence } from 'framer-motion';

import classes from './Notification.module.scss';
import svg from '../../assets/svg/sprite.svg';

const conditionalStyles = {
  success: {
    backgroundColor: '#4caf50',
  },
  error: {
    backgroundColor: '#db4b4b',
  },
  warning: {
    backgroundColor: '#ff9800',
  },
  info: {
    backgroundColor: '#2196f3',
  },
  default: {
    backgroundColor: '#6461F8',
  },
};

const Notification = ({ open, closeFn, status, message }) => {
  return createPortal(
    <AnimatePresence>
      {open && (
        <>
          <div className={classes.overlay}>
            <motion.div
              style={conditionalStyles[status] || conditionalStyles.default}
              initial={{ opacity: 0, y: -50 }}
              animate={{ opacity: 1, y: 0, scale: [0, 0.5, 1] }}
              exit={{ opacity: 0, y: -50, scale: 0.5 }}
              transition={{ duration: 0.3 }}
              className={classes.notification}>
              <div className={classes.notification__status}> 
                <svg>
                  <use
                    href={`${svg}#icon-${
                      status === 'default'
                        ? 'bell'
                        : status === 'success'
                        ? 'check-circle'
                        : status === 'error'
                        ? 'alert-circle'
                        : status === 'warning'
                        ? 'alert-triangle'
                        : 'info'
                    }`}></use>
                </svg>
              </div>
              <div className={classes.notification__title}>{message}</div>
              <div className={classes.notification__separator}></div>
              <button onClick={closeFn} className={classes.notification__close}>
                <svg>
                  <use href={`${svg}#icon-x`}></use>
                </svg>
              </button>
            </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>,
    document.getElementById('notification-modal')
  );
};

export default Notification;
