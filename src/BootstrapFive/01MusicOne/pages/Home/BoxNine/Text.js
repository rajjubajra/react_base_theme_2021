import React from 'react'
import { pagelink } from '../../../PageLink';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';



function Text(props) {


  const state = useSelector(state => state.reducerFetchLandingPage.data);
  const dataLength = useSelector(state => state.reducerFetchLandingPage.dataLength);
  //console.log(state);

  const textStyle = {
    display: "flex",
    flexDirection: "column",
    width: "100%",
    height: "auto",
  }

  function createMarkup(text, rownum, length) {
    /** body content 500 words only */
    const body = length > 0
      ? text[rownum].body[0].processed.substring(0, 500)
      : "<p>.....</p>";
    return {
      __html: body
    };
  };


  console.log(props.data[0])

  return (
    <div style={textStyle}>
      <h1>{dataLength > 0 && state[0].title[0].value}</h1>
      <div dangerouslySetInnerHTML={createMarkup(state, 0, dataLength)} />
      <div>
        <Link className="button" to={pagelink.albums}>Listen</Link>
      </div>
    </div>
  )
}

export default Text
