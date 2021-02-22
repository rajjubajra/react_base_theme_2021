import React from 'react'
import { useTrail, animated } from 'react-spring';


const items = [
  { text: "Haa", id: 1 },
  { text: "Huu", id: 2 },
  { text: "Fuu", id: 3 }
];


function Trail() {

  const trail = useTrail(items.length, {
    config: { mass: 50, tension: 20, friction: 2 },
    opacity: 1,
    x: 0,
    y: 0,
    from: { opacity: 0, x: -200, y: -100 },
  });

  return (
    <div className="container">
      <div className="row">
        <div className="col">
          <h2>useTrail</h2>
          {
            trail.map((elements, index) => (
              <animated.div style={elements} key={index}>
                {items[index].text}
              </animated.div>
            ))
          }
        </div>
      </div>
    </div>
  )
}

export default Trail
