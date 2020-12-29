import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { pagelink } from '../../../PageLink';
import { actionFetchLatestNews } from '../Redux/ActionFetchLatestNews';


const caption = {
  display: "flex",
  flexDirection: "column",
  padding: "25px",
  width: "100%",
  minHeight: "200px",
  fontWeight: "100",
  letterSpacing: "0.02rem",
  color: "#6a6a6a",
  margin: "100px 0px"
}



function Text() {

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(actionFetchLatestNews());
  }, [dispatch])


  /** FETCH LATEST NEWS */
  const latestNews = useSelector(state => state.reducerFetchLatestNews.data);
  const dataLength = useSelector(state => state.reducerFetchLatestNews.dataLength);
  console.log("LATEST NEWS", latestNews);



  function createMarkup(news, rownum, length) {
    /** body content 500 words only */
    const body = length > 0
      ? news[rownum].body[0].processed.substring(0, 500)
      : '<p>........</p>'
    return {
      __html: body
    };
  };


  function dateFormate(unformatedDate, rownum, length) {
    const date = new Date(length > 0 && unformatedDate[rownum].created[0].value);
    const month = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    return `${date.getDate()}  ${month[date.getMonth()]}, ${date.getUTCFullYear()}`;
  }

  //console.log(dataLength > 0 && latestNews[0].created[0].value);

  return (
    <>
      <div className="d-flex justify-content-center">
        <h1>Latest News</h1>
      </div>

      <section style={caption}>
        <div className="d-flex justify-content-end mb-3">
          <p>Date: {dateFormate(latestNews, 0, dataLength)}</p>
        </div>
        <h3>{dataLength > 0 && latestNews[0].title[0].value}</h3>
        <div>
          <div dangerouslySetInnerHTML={createMarkup(latestNews, 0, dataLength)} />
        </div>
        <div>
          <Link className="btn btn-light" to={pagelink.news}>Read More</Link>
        </div>
      </section>

      <section style={caption}>
        <div className="d-flex justify-content-end mb-3">
          <p>Date: {dateFormate(latestNews, 1, dataLength)}</p>
        </div>
        <h3>{dataLength > 0 && latestNews[1].title[0].value}</h3>
        <div>
          <div dangerouslySetInnerHTML={createMarkup(latestNews, 1, dataLength)} />
        </div>
        <div>
          <Link className="btn btn-light" to={pagelink.news}>Read More</Link>
        </div>
      </section>


      {/* <section style={caption}>
        <div>
          <p>Date: </p>
        </div>
        <div style={title}>Latest News</div>
        <div>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Et odit magnam. Trem ipsum dolor, sit amet consectetur adipisicing elit. Sed perspiciatis doloremque voluptatibus. Nihil nobis quia, suscipit accusantium cupiditate impedit nulla non iusto totam eos modi, pariatur, exercitationem fugiat aperiam minus!</p>
        </div>
        <div>
          <div className="btn btn-light">Read More</div>
        </div>
      </section> */}
    </>
  )
}

export default Text
