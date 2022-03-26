import React from 'react';
import './Button.css'

// import { Container } from './styles';

function Button(props) {

  return <button 
    onClick={e => props.click && props.click(props.label)}
    className={`button
      ${props.operation ? 'operation' : ''}
      ${props.double ? 'double' : ''}
      ${props.triple ? 'triple' : ''}
  `}>
    {props.label}
  </button>
}

export default Button;