import React, { useState } from 'react';
import NewsLetters from './NewsLetters/NewsLetters';
import PopularBlogLanding from './PopularBlog/PopularBlogLanding';
import BoxTen from './BoxTen/BoxTen';




export function HomeTablet() {

  const [view, setView] = useState(0);



  return (
    <div className="container mt-5">

      <div className="row mb-5 pb-5">
        <BoxTen />
      </div>

      <div className="row mb-5">
        <div
          style={{
            cursor: "pointer",
            borderTop: view === 0 ? "1px solid #ccc" : "1px solid #ffffff00",
            borderRight: view === 0 ? "1px solid #ccc" : "none",
            borderRadius: "0px 5px 0px 0px",
            borderBottom: view !== 0 ? "1px solid #ccc" : "1px solid #ffffff00",
            padding: "10px 10px"
          }}
          onClick={() => setView(0)}
          className="col-6">
          News Letters
          </div>
        <div
          style={{
            cursor: "pointer",
            borderTop: view === 1 ? "1px solid #ccc" : "1px solid #ffffff00",
            borderLeft: view === 1 ? "1px solid #ccc" : "none",
            borderRadius: "5px 0px 0px 0px",
            borderBottom: view !== 1 ? "1px solid #ccc" : "1px solid #ffffff00",
            padding: "10px 20px"
          }}
          onClick={() => setView(1)}
          className="col-6">
          Popular Blogs
          </div>
      </div>

      <div className="row mt-2">
        <div className={`col ${view === 1 ? 'd-block' : 'd-none'}`}>
          <PopularBlogLanding />
        </div>
        <div className={`col ${view === 0 ? 'd-flex' : 'd-none'}`}>
          <NewsLetters />
        </div>
      </div>
    </div>
  )
}
export default HomeTablet