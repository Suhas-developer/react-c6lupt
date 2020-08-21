import React from 'react';
import updatedcomp from './Wrappercomp'


const Button = (props) =>{
  return (
    <button style={props} >Click This Button</button>
  )
}

export default updatedcomp(Button);