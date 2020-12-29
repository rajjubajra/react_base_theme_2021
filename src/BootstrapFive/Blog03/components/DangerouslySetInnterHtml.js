import React from 'react'


function DangerouslySetInnerHtml(props) {


  const text = props.substr > 0
    ? props.text.substring(0, props.substr)
    : props.text

  function createMarkup(txt) {
    return {
      __html: txt
    };

  };

  return (
    <div dangerouslySetInnerHTML={createMarkup(text)} />
  )
}

export default DangerouslySetInnerHtml