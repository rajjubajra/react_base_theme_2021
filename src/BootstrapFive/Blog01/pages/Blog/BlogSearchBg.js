import React from 'react'
import Footer from '../../components/footer/Footer'

function BlogSearchBg() {

  const wrapping = {
    position: "absolute",
    top: "390px",
    left: "20%",
    zIndex: "0"
  }

  const line = {
    width: "500px",
    height: "1px",
    background: "rgba(245,241,241,1)",
    display: "block",
    position: "absolute",
    transform: "rotate(90deg) translateY(90px) translateX(150px)"
  }

  const bg = {
    position: "absolute",
    width: "300px",
    height: "300px",
    background: "rgba(204,204,204,0.34)",
    borderRadius: "55%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    transform: "rotate(-90deg)"
  }


  const hStyle = {
    fontSize: "5rem",
    fontWeight: "800",
    color: "rgba(175,175,175,0.35)"
  }

  return (
    <>
      <div className="container min-vh-100">
        <div className="row">
          <div style={wrapping}>
            <div style={bg}>
              <span style={hStyle}>Search</span>
            </div>
            <span style={line}></span>
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default BlogSearchBg
