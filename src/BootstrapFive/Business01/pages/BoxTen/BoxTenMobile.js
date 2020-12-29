import React from 'react';
import { useSelector } from 'react-redux';
import Image from '../../components/Image';



function BoxTenMobile(props) {

  const variant = useSelector(state => state.reducerSelectColourMode.variant);

  const boxPosition = {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: 'center',
    margin: "0px 45px",
    borderBottom: "1px solid #ccc",
    borderRight: "1px solid #ccc",
    paddingBottom: "17px"
  }
  const boxStyle = {
    padding: "40px 40px",
    width: "90%",
    position: "relative",

  }
  return (
    <>
      <div className="col-sm-11">
        <div style={boxPosition}>
          <div style={{ display: "flex", width: "100%", justifyContent: "center" }}>
            <div style={{ maxWidth: "350px", width: "90%" }}>
              <Image width="100%" height="450px" image={props.image} />
            </div>
          </div>

          <div style={boxStyle}>
            <div style={{ borderLeft: "1px solid #ddd", paddingLeft: "20px" }}>
              <p>"A ipsum dolor sit amet consectetur adipisicing elit. Sint saepe quis sequi, illum velit dicta recusandae perspiciatis ut molestiae quidem nesciunt, porro dignissimos? Sint soluta consequuntur impedit nam assumenda qui!"</p>
              <p><i>- Namaye wa</i></p>
            </div>

          </div>
        </div>
      </div>
    </>
  )
}

export default BoxTenMobile
