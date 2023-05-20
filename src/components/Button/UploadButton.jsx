import React from 'react';
import { Link } from 'react-router-dom';
import svg from '../../assets/svg/sprite.svg';

const divStyle = {
  position: 'fixed',
  bottom: '2%',
  right: '2%',
  transform: 'translate(-50%, -50%)',
  zIndex: '1000',
};

const buttonStyle = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  width: '65px',
  height: '65px',
  padding: '18px',
  backgroundColor: '#5950d6',
  fill: '#f2f2f2',
  border: 'none',
  borderRadius: '50%',
  cursor: 'pointer',
  filter: 'drop-shadow(0px 0px 5px rgba(0, 0, 0, 0.25))',
  transition: 'all 0.3s ease-in-out',
};

function UploadButton() {
  return (
    <div style={divStyle}>
      <Link to={'/upload'} style={buttonStyle}>
        <svg>
          <use href={svg + '#icon-plus'} />
        </svg>
      </Link>
    </div>
  );
}

export default UploadButton;
