import React from 'react';



function IntroBrief(props) {


  const { title, logoHorz, logoHorzAlt, body } = props

  return (
    <div>
      {/** TITLE */}
      <h1 style={{
        fontFamily: "'Mrs Saint Delafield', cursive",
        transform: "scale(1.6) translate(46px, 10px)"
      }}>{title}</h1>
      {/*** LOGO */}
      <div className="logo-h">
        <img
          style={{ width: "100%", maxWidth: "300px", height: "auto" }}
          src={logoHorz}
          alt={logoHorzAlt} />
      </div>

      {/** BRIEF INTRO */}
      <section className="body mt-5">
        <div dangerouslySetInnerHTML={{ __html: body }} />
      </section>

    </div>
  )
}

export default IntroBrief
