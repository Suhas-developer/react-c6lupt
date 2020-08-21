import React from 'react';
import {buttonstyle} from './Stylecomp'

const updatedcomp = (Orginalcomp) => {
  const newcomp = (props) => {
    let newstyle = buttonstyle.default;
    console.log(props)
    console.log(buttonstyle.default)
    // if(props.styles){
    //   newstyle = props.style.default;
    // }else{
    //   newstyle = ;
    // }
      return (
        <Orginalcomp  {...newstyle} />
      )
  }
  return newcomp
}

export default updatedcomp;