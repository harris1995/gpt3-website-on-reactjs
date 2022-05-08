import React from 'react';
import './gif.css';
import Spinner from '../../assets/Spinner.gif';

const Gif = () => {
  return (
    <div className='spinner'>
        <img src={Spinner} alt="loading" />
    </div>
  )
}

export default Gif