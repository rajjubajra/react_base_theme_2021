import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { ActionFetchPopularBlog } from './Redux/ActionFetchPopularBlog';
import ViewBoxDesktop from './ViewBoxDesktop';
import ViewBoxTablet from './ViewBoxTablet'


function PopularBlogLanding(props) {


  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(ActionFetchPopularBlog());
  }, [dispatch])

  const data = useSelector(state => state.ReducerFetchPopularBlog.data);
  const fetched = useSelector(state => state.ReducerFetchPopularBlog.fetched);

  //console.log(" DATA +++ ===", data);


  const titleStyle = {
    marginLeft: "5px"
  }

  return (
    <>
      <div className="row">
        <div className="col">
          {
            !props.hideTitle && <div style={titleStyle}>
              <h2 className="text-uppercase d-none d-md-block d-lg-block d-xl-block">
                - Popular Blogs -</h2>
            </div>
          }
        </div>
      </div>
      <div className="row justify-content-center">
        {
          fetched
            ? data.slice(0, 4).map(item => {
              const { nid, title, body, created } = item;
              return <div key={nid} className="col-sm-10 col-lg-6 col-md-6">
                <div style={{
                  width: "100%",
                  padding: "20px 45px",
                  border: "1px solid #ccc",
                  margin: "10px 0px"
                }}>
                  {/** DESKTOP VIEW */}
                  <div className='d-none d-lg-block d-xl-block'>
                    <ViewBoxDesktop
                      nid={nid}
                      title={title}
                      body={body}
                      dateNonFormated={created}
                    />
                  </div>
                  {/** MOBILE VIEW */}
                  <div className='d-block d-sm-block d-md-block d-lg-none d-xl-none'>
                    <ViewBoxTablet
                      nid={nid}
                      title={title}
                      body={body}
                      dateNonFormated={created}
                    />
                  </div>

                </div>
              </div>
            })
            : 'LOADING.....'
        }
      </div>

    </>
  )
}

export default PopularBlogLanding