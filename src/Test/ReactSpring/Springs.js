import React from 'react';
import { useSprings, animated } from 'react-spring';


const items = [
  { text: "foo", opacity: 0.3, color: "red", margin: "0px 0px 0px 0px", id: 1 },
  { text: "bar", opacity: 0.6, color: "green", margin: "0px 0px 0px 0px", id: 2 },
  { text: "baz", opacity: 0.9, color: "#cccccc", margin: "0px 0px 0px 0px", id: 3 },
  { text: "ZOO", opacity: 1, color: "blue", margin: "0px 0px 0px 0px", id: 4 }
];


function Springs() {

  const springs = useSprings(
    items.length,
    items.map((item) => ({
      opacity: item.opacity,
      color: item.color,
      margin: item.margin,
      config: { delay: 2000, mass: 500, friction: 100 },
      from: { opacity: 0, color: "#cccccc", margin: "-50px 0px 0px 0px" }
    }))
  );
  console.log("SPRING", springs);


  return (
    <div className="container">
      <div className="row">
        <div className="col">
          <h2>Springs</h2>
          {springs.map((props, i) => {
            return <animated.div style={props} key={i}>
              {items[i].text}
            </animated.div>
          })}
        </div>
      </div>
    </div>
  )
}

export default Springs
