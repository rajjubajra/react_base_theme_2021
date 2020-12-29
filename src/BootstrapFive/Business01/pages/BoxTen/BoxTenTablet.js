import React from 'react';
import { useSelector } from 'react-redux';
import Image from '../../components/Image';



function BoxTenTablet(props) {

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
    transform: "skewX(0deg) translateX(120px) translateY(-37px)",
    zIndex: "10",
    position: "relative",
    background: variant === 'dark' ? "#999" : "#fff",
    borderBottom: "1px solid #ccc",
    borderRight: "1px solid #ccc",
    outline: "1px solid #ddd",
    outlineOffset: "-15px",
    paddingBottom: "17px",
  }




  return (
    <>

      <div className="col-md-5">
        <div style={boxPosition}>
          <div style={boxStyle}>
            <p>"A ipsum dolor sit amet consectetur adipisicing elit. Sint saepe quis sequi, illum velit dicta recusandae perspiciatis ut molestiae quidem nesciunt, porro dignissimos? Sint soluta consequuntur impedit nam assumenda qui!"</p>
            <p><i>- Namaye wa</i></p>
          </div>

        </div>
      </div>
      <div className="col-md-6">
        <div style={{ maxWidth: "350px" }}>
          <Image width="100%" height="450px" image={props.image} />
        </div>
      </div>
      <div className="col-md-1"></div>

    </>
  )
}

export default BoxTenTablet
