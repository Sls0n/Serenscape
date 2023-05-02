import React from 'react';
import UploadForm from './UploadForm';
import { getAuth } from 'firebase/auth';

const UploadSound = () => {
  const auth = getAuth();

  return <>{auth.currentUser ? <UploadForm /> : <p>You need to be signed in to upload</p>}</>;
};

export default UploadSound;
