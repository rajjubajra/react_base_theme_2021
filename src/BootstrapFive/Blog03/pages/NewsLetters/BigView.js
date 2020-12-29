import React, { useEffect, useState } from 'react';
import DangerouslySetInnerHtml from '../../components/DangerouslySetInnterHtml';

function BigView(props) {

  const { fetched, news } = props;

  const [body, setBody] = useState();
  useEffect(() => {
    fetched && setBody(news[0].body.substring(0, 300))
  }, [fetched, news])



  return (
    <div className="min-vh-100">


      <div className="d-flex w-100 justify-content-center">
        <div style={{
          width: "70%",
          minHeight: "80vh",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
        }}>
          <div className="mt-5 mb-5">
            <h1>
              {fetched && news[0].title}</h1>
          </div>
          <section className="mt-5 mb-5 big-first-letter">
            <DangerouslySetInnerHtml
              text={fetched && body}
            />
          </section>
        </div>
      </div>
    </div>
  )
}

export default BigView
