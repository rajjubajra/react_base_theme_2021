import React from 'react';
import { Link } from 'react-router-dom';
import { pagelink } from '../../PageLink';
import { useSelector } from 'react-redux';



function MusicCard(props) {


  const variant = useSelector(state => state.reducerSelectColourMode.variant);


  return (
    <>
      {props.img !== '' &&
        <Link to={`/${pagelink.playAll}/${props.id}`}>
          <div className="card bg-dark text-white mt-5">
            <img
              style={{
                width: "100%",
                height: "auto",
                margin: "0px 2px",
                outline: variant === 'dark' ? "3px solid #666" : "3px solid #fff",
              }}
              src={props.img}
              alt={props.alt} />
            <div style={{ padding: "0px" }} className="card-img-overlay">
              <p className="card-text">
                <div style={{
                  color: "#000",
                  backgroundColor: "rgba(255,255,255,0.5)",
                  padding: "1px 10px",
                  position: "absolute",
                  bottom: "13px"
                }}>{props.title}</div>
              </p>
            </div>
          </div>
        </Link>
      }
    </>
  )
}

export default MusicCard
