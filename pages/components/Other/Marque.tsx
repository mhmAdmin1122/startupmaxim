import React from 'react'
import Marquee from "react-fast-marquee";

const Marque = ({text}:any) => {
  return (
    <Marquee speed={30}>
      {text}
      {text}
      {text}
    </Marquee>
  )
}

export default Marque
