import React from 'react';
import BoxTen from './BoxTen/BoxTen';
import NewsLetters from './NewsLetters/NewsLetters';
import PopularBlogLanding from './PopularBlog/PopularBlogLanding';




export function HomeDesktop() {


  return (
    <div className="container mt-5">

      <div className="row mb-5 pb-5">

        <div className="col">
          <BoxTen />
        </div>

      </div>
      <div className="row my-5">
        <div className="col-lg-12 my-5">
          <PopularBlogLanding />
        </div>
      </div>
      <div className="row justify-content-center">
        <div className="col-lg-9">
          <NewsLetters />
        </div>
      </div>
    </div>
  )
}
export default HomeDesktop