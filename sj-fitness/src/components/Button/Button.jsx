import React from 'react';
import "./button.scss";

const Button = (props) => {
  const { label } = props;
  return (
    <div className='button'>{label}</div>
  )
}

export default Button