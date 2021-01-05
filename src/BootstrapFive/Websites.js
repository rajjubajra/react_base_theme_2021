import React from 'react';
import { Link } from 'react-router-dom';



const data = [
  {
    id: 1,
    title: "Base Theme",
    type: "Base-Theme",
    link: "/base-theme"
  },
  {
    id: 2,
    title: "Yellow Website Zero",
    type: "Profile",
    link: "/yellow-website-home"
  },
  {
    id: 3,
    title: "Music One",
    type: "Music Artist [Band / Solo Artist]",
    link: "/b4MusicOne-home"
  },
  {
    id: 4,
    title: "Music Two",
    type: "Music Artist [Band / Solo Artist]",
    link: "/b4Music-two-home"
  },
  {
    id: 5,
    title: "Music Three",
    type: "Music Artist [Band / Solo Artist]",
    link: "/b4Music-three-home"
  },
  {
    id: 6,
    title: "Blog Post One",
    type: "Blog Post",
    link: "/b4Blog-one-"
  },
  {
    id: 7,
    title: "Blog Post Two",
    type: "Blog Post",
    link: "/b4Blog-two-"
  },
  {
    id: 8,
    title: "Blog Post Three",
    type: "Blog Post",
    link: "/b4Blog-three-"
  },
  {
    id: 9,
    title: "Blog Post Four",
    type: "Blog Post",
    link: "/b4Blog-four-"
  },
  {
    id: 10,
    title: "Business One",
    type: "Business",
    link: "/b4-business-one-home"
  },
  {
    id: 11,
    title: "Business Two",
    type: "Business",
    link: "/b4-business-two"
  },
  {
    id: 12,
    title: "Business Three",
    type: "Business",
    link: "/b4-business-three"
  },
  {
    id: 13,
    title: "Photograhy One",
    type: "Photography/Art",
    link: "/b5-photography-one/all"
  },


]



const Websites = () => {


  return (
    <div className="container">
      <div className="row">
        <div className="col">
          <h1>Website Themes</h1>
        </div>
      </div>

      <div className="row">

        {
          data.length > 0
          && data.map((item, index) => {
            return <div key={index} className="col-lg-4 col-md-6 col-sm-12">
              <div className="card my-2" style={{ minWidth: "18rem" }}>
                <div className="card-body">
                  <h5 className="card-title">{item.title}</h5>
                  <h6 className="card-subtitle mb-2 text-muted">{item.type}</h6>
                  <Link to={`${item.link}`} className="card-link" target="_blank">View</Link>
                </div>
              </div>
            </div>
          })
        }



      </div>
    </div>




  )

}

export default Websites