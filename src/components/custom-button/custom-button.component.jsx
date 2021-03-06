import React from 'react';

import './custom-button.styles.scss';

const CustomButton = ({
  children,
  isGoogleSignIn,
  isFacebookSignIn,
  inverted,
  ...otherProps
}) => (
  <button
    className={`${inverted ? 'inverted' : ''} ${
      isGoogleSignIn ? 'google-sign-in' : 'facebook-sign-in'
      
    } custom-button`}
    {...otherProps}
  >
    {children}
  </button>
  
  
);

export default CustomButton;
