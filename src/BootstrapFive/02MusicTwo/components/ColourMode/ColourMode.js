import React from 'react';
import { useDispatch } from 'react-redux';
import { actionSelectColourMode } from '../../redux/actions/actionSelectColourMode';
// import IconBackspace from '../Icon/IconBackspace';
// import IconXSquare from '../Icon/IconXSquare';
import { cssClassName } from '../../Config/cssClassName';



const ulStyle = {
  position: "fixed",
  right: "10px",
  top: "180px",
  listStyle: "none"
}

const blackWhiteStyle = {
  background: "#fff",
  border: "3px solid #000",
  width: "15px",
  height: "15px",
  margin: "5px 0px",
  cursor: "pointer"
}

const lightStyle = {
  background: "#eee",
  border: "1px solid #000",
  width: "15px",
  height: "15px",
  margin: "5px 0px",
  cursor: "pointer"
}

const darkStyle = {
  background: "#000",
  border: "1px solid #000",
  width: "15px",
  height: "15px",
  margin: "5px 0px",
  cursor: "pointer"
}



// const backIconStyle = {
//   position: "relative"
// }


function ColourMode() {

  const dispatch = useDispatch();


  return (
    <div>
      <ul style={ulStyle}>
        <li style={blackWhiteStyle}
          onClick={() =>
            dispatch(actionSelectColourMode(cssClassName.blackWhite, 'white'))}>
        </li>
        <li style={lightStyle}
          onClick={() =>
            dispatch(actionSelectColourMode(cssClassName.light, 'light'))}>
        </li>
        <li style={darkStyle}
          onClick={() =>
            dispatch(actionSelectColourMode(cssClassName.dark, 'dark'))}>
        </li>
        {/* <li style={backIconStyle}>
          <IconBackspace linkRef={'websites-bootstrap'} />
        </li>
        <li style={backIconStyle}>
          <IconXSquare linkRef={'for-sale'} />
        </li> */}
      </ul>
    </div>
  )
}
export default ColourMode