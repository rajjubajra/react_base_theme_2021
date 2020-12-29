import React from 'react';
import { useSelector } from 'react-redux';

function HalfImageBlock(props) {

  const variant = useSelector(state => state.reducerSelectColourMode.variant);

  const firstHalfStyle = {
    width: "100%",
    minHeight: "50vh",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    background: variant === 'dark' ? "#000" : "rgb(185 185 185)",
    padding: "0px 100px"
  }


  return (
    <div className="w-100">

      <img
        style={{ width: "100%", height: "50vh", objectFit: "cover" }}
        src="https://yellow-website.com/d8-react-base-theme-backend/sites/default/files/photo_placeholder/japan2.jpg"
        alt="backgroud" />


      <div style={firstHalfStyle}>


        <h1>Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore similique!</h1>
        <h3
          style={{ textAlign: "center", textDecoration: "underline" }}
          className="mt-5 align-center">Dniam, possimus repellat</h3>
      </div>
    </div>
  )
}

export default HalfImageBlock
