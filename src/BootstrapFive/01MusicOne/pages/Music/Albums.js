import React from 'react'

function Albums(props) {


  function createMarkup(txt) {
    return {
      __html: txt
    };
  };

  const { title, img, alt, body } = props;

  const trimedBody = body.substring(0, 200);

  return (
    <div className="mt-2 mb-5">
      <h4>{title}</h4>
      <div>
        <img
          style={{
            width: "100%",
            outline: "1px solid rgba(204,204,204,0.38)",
            outlineOffset: "-10px"
          }}
          src={img}
          alt={alt} />
      </div>
      <div className="mb-3 mt-2">
        <div dangerouslySetInnerHTML={createMarkup(trimedBody)} />
      </div>

    </div>
  )
}


export default Albums
