import React from 'react';
import ViewBox from '../ViewBox';


function NewsLetterView(props) {



  return (
    <div>
      <h1>{props.title}</h1>
      {
        props.fetched
          ? props.news.map(item => {
            const { title, body, nid, created } = item
            return <section key={nid} className="mt-5 mb-5">
              <ViewBox
                nid={nid}
                dateNonFormated={created}
                title={title}
                body={body}
              />
            </section>
          })
          : "LOADING...."
      }
    </div>
  )

}
export default NewsLetterView