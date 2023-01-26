import React from 'react'




const Button = ({ children, className, onClick }) => {
  return (
    <button className={`flex py-2 px-6 font-bold text-white bg-herpaBlue 
     hover:bg-herpaLightDarkRed focus:outline-none focus:shadow-outline-blue
      ${className}`} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
