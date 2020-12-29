import React from 'react';

import Text from './Text';


const styleLight = {
  width: "100%",
  height: "auto",
  margin: "20px 0px"
}


export const BoxEight = () => {
  return (
    <div style={{ width: "100%", height: "auto", marginBottom: "80px" }}>
      <section style={styleLight}>
        <Text />
      </section>
    </div>
  )
}

export default BoxEight;
