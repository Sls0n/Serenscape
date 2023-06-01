import { useReducer, useEffect } from 'react';

const initialState = {
  showNotification: false,
  notificationMessage: '',
  notificationStatus: 'default',
};

const reducer = (state, action) => {
  switch (action.type) {
    case 'SHOW_NOTIFICATION':
      return {
        ...state,
        showNotification: true,
        notificationMessage: action.payload,
        notificationStatus: action.status,
      };
    case 'HIDE_NOTIFICATION':
      return { ...state, showNotification: false };
    default:
      return state;
  }
};

const useNotification = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const renderNotification = (message, status) => {
    dispatch({ type: 'SHOW_NOTIFICATION', payload: message, status: status });
  };

  const removeNotification = () => {
    dispatch({ type: 'HIDE_NOTIFICATION' });
  };

  useEffect(() => {
    let timeout;
    if (state.showNotification) {
      timeout = setTimeout(() => {
        removeNotification();
      }, 4000);
    }

    return () => {
      clearTimeout(timeout);
    };
  }, [state.showNotification]);

  return { state, renderNotification, removeNotification };
};

export default useNotification;
