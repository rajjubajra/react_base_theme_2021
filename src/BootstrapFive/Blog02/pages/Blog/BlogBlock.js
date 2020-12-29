import React, { useState, useEffect } from 'react'
import BlogBlockDesktop from './BlogBlockDesktop';
import BlogBlockMobile from './BlogBlockMobile';



function BlogBlock(props) {

  console.log(props.data.length && props.data);

  const [loading, setLoading] = useState('');
  const [timer, setTimer] = useState(true);


  function LoadintTimmer() {
    setTimeout(function () {
      setTimer(false)
    }, 10000)
  }
  LoadintTimmer();


  useEffect(() => {
    timer ? setLoading("Loading") : setLoading("Data not found. Please try again");
  }, [timer])


  return (
    <>
      <div className="row  mb-5">
        <div className="col-lg-10 col-md-10 col-sm-7  mb-5">
          <h1>Blogs</h1>
        </div>
      </div>

      {
        props.data.length > 0
          ? props.data.map(item => {
            const { nid, title, created, body } = item;
            return <div key={nid}>

              <div className="d-none d-md-block d-lg-block d-xl-block">
                <BlogBlockDesktop
                  nid={nid}
                  title={title}
                  created={created}
                  body={body} />
              </div>

              <div className="d-block d-md-none d-lg-none d-xl-none">
                <BlogBlockMobile
                  nid={nid}
                  title={title}
                  created={created}
                  body={body} />
              </div>

            </div>
          })
          : <div className="col d-flex justify-content-center mb-5">
            {loading}</div>
      }

    </>
  )
}

export default BlogBlock
