import React, { useState, useEffect } from 'react';
import { useTransition, animated } from 'react-spring'
import data from './data';




function Transition() {

  const [items, setItems] = useState([]);

  useEffect(() => {
    setItems(data);
  }, [])

  const transitions = useTransition(items, items => items.id, {
    from: { opacity: 0, marginLeft: -100, marginRight: 100 },
    enter: { opacity: 1, marginLeft: 0, marginRight: 0 },
    config: { mass: 200 }
  });

  console.log(items);

  return (
    <div>
      {
        transitions.map(({ item, key, props }) => (
          <animated.div key={key} style={props}>
            {item.text}
          </animated.div>
        ))
      }

    </div>
  )

}

export default Transition



