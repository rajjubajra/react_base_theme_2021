import React, { useState } from 'react';
import { useSpring, animated } from 'react-spring'


function IntroBrief() {

  const items = [
    {
      id: 1,
      text: 'one'
    },
    {
      id: 2,
      text: 'one'
    },
    {
      id: 3,
      text: 'one'
    },
    {
      id: 4,
      text: 'one'
    }

  ]

  const props = useSpring({
    to: async (next, cancel) => {
      await next({ opacity: 1, color: '#ffaaee' })
      await next({ opacity: 0, color: 'rgb(14,26,19)' })
    },
    from: { opacity: 0, color: 'red' }
  })


  return (
    <div>
      <animated.div style={props}>I will Fade In</animated.div>
    </div>
  )
}

export default IntroBrief
