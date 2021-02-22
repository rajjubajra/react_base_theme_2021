import React from 'react';
import { useSpring, animated } from 'react-spring';


function Spring() {

  const props = useSpring({
    to: async (next, cancel) => {
      await next({ opacity: 1, color: '#ffaaee' })
      await next({ opacity: 0, color: '#0671e4' })
      await next({ opacity: 1, color: '#0671e4' })
      await next({ opacity: 0, color: '#0671e4', config: { duration: 2000, mass: 200 } })
      await next({ opacity: 1, color: 'rgb(14,26,19)' })
    },
    from: { opacity: 0, color: 'red' }
  })


  return (
    <div className="container">
      <div className="row">
        <div className="col">
          <h2>Spring</h2>
          <animated.div style={props}><h1>I will fade in and out</h1></animated.div>
        </div>
      </div>
    </div>

  )
}

export default Spring
