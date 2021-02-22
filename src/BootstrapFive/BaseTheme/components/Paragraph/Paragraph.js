import React from 'react';
import styled from 'styled-components';

function Paragraph(props) {

  const Para = styled.div`
    font-weight: 100;
    letter-spacing: 1px;

    h2, h1{
      font-weight: 200;
      letter-spacing: 2px
    }
  `



  return (
    <Para>
      <h2>Title</h2>
      {props.text}
      <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Perspiciatis ipsam consequuntur delectus earum placeat minima voluptate cumque magnam! Libero expedita, placeat ratione repellat laborum sed ipsam iure similique beatae blanditiis!</p>
      <p>Rrem ipsum dolor sit amet consectetur adipisicing elit. Repellat nesciunt sit dolorum est veniam nihil voluptate, beatae minus nam incidunt suscipit, aperiam velit debitis cupiditate? Optio quisquam veritatis laborum repellendus.lore ipsum dolor sit amet consectetur adipisicing elit. Voluptates magni officiis veritatis cum eius voluptatibus vitae corporis ex vel debitis harum aspernatur, eum sequi illo a asperiores quisquam molestiae exercitationem!</p>
    </Para>
  )
}

export default Paragraph
