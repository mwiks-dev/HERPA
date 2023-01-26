import React from 'react'

const ButtonLearn =({ children, className, onClick }) => {
  return (
    <button className={`flex py-2 md:py-4 px-6 font-bold text-white bg-herpaBlue 
     hover:bg-herpaDarkRed focus:outline-none focus:shadow-outline-blue
      ${className}`} onClick={onClick}>
      {children}
    </button>
  );
};

export default ButtonLearn
