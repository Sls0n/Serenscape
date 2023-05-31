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

const useErrorHandler = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const renderError = (message, status) => {
    dispatch({ type: 'SHOW_NOTIFICATION', payload: message, status: status });
  };

  const removeError = () => {
    dispatch({ type: 'HIDE_NOTIFICATION' });
  };

  useEffect(() => {
    let timeout;
    if (state.showNotification) {
      timeout = setTimeout(() => {
        removeError();
      }, 4000);
    }

    return () => {
      clearTimeout(timeout);
    };
  }, [state.showNotification]);

  return { state, renderError, removeError };
};

export default useErrorHandler;
