import React from 'react';
import { Link } from 'react-router-dom';

const Success = () => {
  return (
    <div>
      <h1>Success! You're logged in</h1>
      <Link to="/">Go back to home</Link>
      <Link to="/profile">Go to profile</Link>
    </div>
  );
};

export default Success;
