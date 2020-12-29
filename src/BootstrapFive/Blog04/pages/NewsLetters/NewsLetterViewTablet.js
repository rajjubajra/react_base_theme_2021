import React from 'react';
import ViewBox from '../ViewBox';


function NewsLetterViewTablet(props) {

  /** EVEN OR ODD NUMBER */
  //const isEven = (n) => (n / 2 === 1 ? true : false)

  return (
    <>
      <div className="row">
        <h2 className="text-uppercase ml-4">- {props.title} -</h2>
      </div>
      <div className="row justify-content-center">
        {
          props.fetched
            ? props.news.map((item, index) => {
              const { title, body, nid, created } = item
              return <div key={nid} className="col-sm-10 col-lg-6 col-md-6">
                <div style={{
                  height: "345px"
                }} className='border p-3 mx-1 my-3'>
                  <ViewBox
                    nid={nid}
                    dateNonFormated={created}
                    title={title}
                    body={body.slice(0, 200)}
                  />
                </div>
              </div>
            })
            : "LOADING...."
        }
      </div>
    </>
  )

}
export default NewsLetterViewTablet