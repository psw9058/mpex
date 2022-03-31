import React from 'react';
import Navbar from './navbar/navbar';

const Notice = ({authService}) => {
  return(
    <>
      <Navbar authService={authService}/>
        공사중..
    </>
  )   
};

export default Notice;

