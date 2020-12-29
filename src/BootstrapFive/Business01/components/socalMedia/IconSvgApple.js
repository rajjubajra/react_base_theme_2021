import React from 'react'

function IconSvgApple(props) {
  const imgStyle = {
    width: props.width,
    height: props.height,
    objectFit: "cover",
    margin: "5px"
  }

  const url = "https://yellow-website.com/d8-react-base-theme-backend/sites/default/files/photo_placeholder/apple.svg";

  return (
    <div>
      { /** if Photo has data populate Img Tag else View Custom blank placeholder */

        // eslint-disable-next-line jsx-a11y/img-redundant-alt
        <img
          style={imgStyle}
          src={url}
          alt="travel photo placeholder" />
      }
    </div>
  )
}

export default IconSvgApple
