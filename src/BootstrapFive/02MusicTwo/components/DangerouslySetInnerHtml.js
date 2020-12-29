import React from 'react'


function DangerouslySetInnerHtml(props) {

  function createMarkup(txt) {
    return {
      __html: txt
    };

  };

  return (
    <div dangerouslySetInnerHTML={createMarkup(props.text)} />
  )
}

export default DangerouslySetInnerHtml