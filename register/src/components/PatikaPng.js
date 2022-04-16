import React from 'react'
import patika from '../constant/svg/patika.png'

function PatikaPng() {
    const mystyle = {
        height: "150px",
        width: "300px"
      };
  return (
    <img src={patika} style={mystyle}/>
  )
}

export default PatikaPng