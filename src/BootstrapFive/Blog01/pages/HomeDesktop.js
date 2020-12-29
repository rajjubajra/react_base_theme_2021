import React from 'react';
import NewsLetters from './NewsLetters/NewsLetters';
import PopularBlog from './PopularBlog/PopularBlog';




export function HomeDesktop() {



  return (
    <div className="container mt-5">

      <div className="row">
        <div className="col-lg-3">
          <PopularBlog />
        </div>
        <div className="col-lg-9">
          <NewsLetters />
        </div>
      </div>
    </div>
  )
}
export default HomeDesktop