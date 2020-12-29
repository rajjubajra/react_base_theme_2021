import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { ActionFetchPopularBlog } from './Redux/ActionFetchPopularBlog';
import ViewBoxMobile from './ViewBoxMobile';
import ViewBoxTablet from './ViewBoxTablet';


function PopularBlog(props) {


  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(ActionFetchPopularBlog());
  }, [dispatch])

  const data = useSelector(state => state.ReducerFetchPopularBlog.data);
  const fetched = useSelector(state => state.ReducerFetchPopularBlog.fetched);

  console.log(" DATA +++ ===", data);


  const titleStyle = {
    lineHeight: "0.01rem",
    position: "relative",
    top: "34px"
  }

  /** This component using ViewBoxMobile for Desktop
   * and ViewDesktop for Tablet and Mobile View
   * because it view only on narrow side of Blog page
   * in Desktop page and cover wide area in Tablet
   * 
   * d-none d-md-block d-lg-block d-xl-block
   */
  return (
    <div className="col-sm-10 col-lg-12 col-md-12">
      {
        !props.hideTitle && <div style={titleStyle}>
          <div className="d-none d-sm-none d-md-none">
            <h2 className="text-uppercase">
              Popular</h2>
            <span className="medium-font text-uppercase">Blog</span>
          </div>
        </div>
      }

      {
        fetched
          ? data.map(item => {
            const { nid, title, body } = item;
            return <section
              style={{ position: "relative" }}
              key={nid}>
              <div className="d-none d-lg-block d-xl-block">
                <ViewBoxMobile
                  nid={nid}
                  title={title}
                  body={body}
                  substr="200"
                />
              </div>
              <div className="d-block d-sm-block d-md-block d-lg-none d-xl-none border-bottom">
                <ViewBoxTablet
                  nid={nid}
                  title={title}
                  body={body}
                  substr="200"
                />
              </div>
            </section>
          })
          : 'LOADING.....'
      }

    </div>
  )
}

export default PopularBlog