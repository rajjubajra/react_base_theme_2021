import React, { useRef, useState } from 'react';
import { useSelector } from 'react-redux';

/** This Component  
 * displays share Icon
 * copies current url on click on share icon
 */

function CopyToClipBoard() {

  /** colour variant */
  const variant = useSelector(state => state.reducerSelectColourMode.variant);

  const [isCopied, setCopied] = useState(false);
  const textAreaRef = useRef(null);

  /** copy current url */
  const copyContent = window.location;

  function CbCopy(e) {
    console.log("copy", e);
    textAreaRef.current.select();
    document.execCommand('copy');
    e.target.focus();
    setCopied(true);
  }
  function CBClear(e) {
    setCopied(false)
  }


  const btStyle = {
    margin: "14px",
    cursor: "pointer",
    color: variant === 'dark' ? '#fff' : ''
  }


  return (
    <>
      {
        document.queryCommandSupported('copy') &&
          isCopied
          ? <span style={btStyle} className="small-font" onClick={CBClear}>
            Copied</span>
          : <span style={btStyle} className="small-font" onClick={CbCopy}>
            Share</span>
      }
      <form style={{ position: "relative", top: "-1000000px", width: "0px" }}>
        <textarea
          ref={textAreaRef}
          value={copyContent}
        />
      </form>
    </>
  )


}
export default CopyToClipBoard


