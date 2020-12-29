import React from 'react'
import { useSelector } from 'react-redux';
import Image from './Image';



function BoxTenDesktop(props) {

  const variant = useSelector(state => state.reducerSelectColourMode.variant);



  const boxPosition = {
    height: "500px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: 'center',
  }

  const boxStyle = {
    padding: "40px 40px",
    transform: "skewX(0deg) translateX(110px)",
    zIndex: "10",
    position: "relative",
    background: variant === 'dark' ? "rgb(14 27 45)" : "#fff",
    borderBottom: "1px solid #ccc",
    borderRight: "1px solid #ccc",
    outline: "1px solid #ddd",
    outlineOffset: "-15px"
  }





  return (
    <>
      <div className="col-lg-1"></div>
      <div className="col-lg-4">
        <div style={boxPosition}>
          <div style={boxStyle}>
            <p>"A ipsum dolor sit amet consectetur adipisicing elit. Sint saepe quis sequi, illum velit dicta recusandae perspiciatis ut molestiae quidem nesciunt, porro dignissimos? Sint soluta consequuntur impedit nam assumenda qui!"</p>
            <p className='signature'>- Namaye wa</p>
          </div>

        </div>
      </div>
      <div className="col-lg-5">
        <div style={{ maxWidth: "400px" }}>
          <Image width="100%" height="500px" image={props.image} />
        </div>
      </div>
      <div className="col-lg-2"></div>
    </>
  )
}

export default BoxTenDesktop
