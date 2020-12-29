import React, { useState, useEffect } from 'react';
import NavigationOne from '../../components/header/NavigationOne/NavigationOne';
import Title from '../../components/header/Titlte/Title';
import SearchForm from './Form/SearchForm';
import { useSelector, useDispatch } from 'react-redux';
import { ActionFetchBlog } from './Redux/ActionFetchBlog';
import ViewBox from '../ViewBox';
import IconClose from '../../components/Icon/IconClose';
import { useHistory } from 'react-router-dom';
import BlogSearchBg from './BlogSearchBg';


function BlogSearch() {

  /** colour variant */
  const colourMode = useSelector(state => state.reducerSelectColourMode.colourMode)

  /** define states */
  const query = useSelector(state => state.ReducerSearchForm.query);
  const [queryResult, setQueryResult] = useState([]);


  /*** STEP 1 *** FETCH DATA  ***********************/
  const dispatch = useDispatch();
  /** ACTION FETCH BLOG DATA */
  useEffect(() => {
    /** empty value is passed in order to 
     * fetch all Blog data
      */
    dispatch(ActionFetchBlog('', ''));
  }, [dispatch])
  /**  FETCH DATA FROM REDUCER */
  const payload = useSelector(state => state.ReducerFetchBlog.payload);
  const fetched = useSelector(state => state.ReducerFetchBlog.fetched);
  //console.log("DATA TO SEARCH", data);


  /** PAGINATION *******************************************/
  const initial = 0;
  const pageGap = 8;
  const queryLength = queryResult && queryResult.length;

  const [pager, setPager] = useState(initial);

  const nextPage = () => {
    pager < (queryLength - pageGap) &&
      setPager(prevState => prevState + pageGap)
  }

  const prevPage = () => {
    pager >= pageGap &&
      setPager(prevState => prevState - pageGap)
  }

  const slicedQuery = queryResult && queryResult.slice(pager, pager + pageGap);
  console.log("SLICED QUERY", slicedQuery);
  /** PAGINATION closed ******************************/




  /*** 3 *** STORE QUERY RESULT INTO QUERY RESULT STATE
   * USING filter and includes functions
   */
  useEffect(() => {
    let result = fetched && query.length > 0 &&
      payload.filter(item =>
        item.title.toLowerCase().includes(query.toLowerCase())
        || item.body.toLowerCase().includes(query.toLowerCase())
      )
    setQueryResult(result);
    query.length < 1 && setPager(0);
  }, [payload, query, fetched]) // run query when any changes on query state
  console.log("QUERY RESULT", queryResult);


  /** HILIGHTs the SEARCH RESULT THAT MATCH QUERY */
  function highlightQury(query, text) {
    let term = query; // search query we want to highlight in results 
    let results = text; // search results
    // "g" for global, "i" for case-insensitive
    return results.replace(new RegExp(term, "gi"), (match) => `<mark>${match}</mark>`);
  }

  /** GO BACK BUTTON  : REACT-ROUTER  */
  const history = useHistory();

  const textbg = {
    position: 'relative',
    padding: "20px",
    zIndex: "10",
  }


  return (
    <div className='blog-three'>
      <div className={colourMode}>

        {/** MAIN NAVIGATION */}
        <NavigationOne hideSearchIcon={true} />

        <div className="container-fluid mb-5 mt-5 min-vh-100">
          <div className="row justify-content-end">
            <span onClick={() => history.goBack()}><IconClose /></span>
          </div>
          {/** Title */}
          <div className="row">
            <div className="col">
              <Title title="Blogs" hideLink={true} />
            </div>
          </div>

          {/** SEARCH FORM */}
          <div className="row justify-content-center">
            <div className="col-lg-8 col-md-8 col-sm-10">
              <SearchForm query={query} />
            </div>
          </div>

          {/** SEARCH RESULT */}
          <div
            style={textbg}
            className="row justify-content-center">
            <div className="col-lg-7  col-md-8 col-sm-10">
              {
                queryResult && slicedQuery.map(item => {
                  return <section key={item.nid}>
                    <ViewBox
                      title={highlightQury(query, item.title)}
                      body={highlightQury(query, item.body)}
                      dateNonFormated={item.created}
                      nid={item.nid}
                    />
                  </section>
                })
              }

            </div>
          </div>

          {/** SEARCH NOT FOUND MESSAGE */}
          <div className="row">
            <div className="col d-flex justify-content-center">
              {
                query.length > 0
                && queryResult
                && queryResult.length < 1
                && 'Search Not found'
              }
            </div>
          </div>
          {/** PAGE NAVIGATIONS */}
          <div className={`${queryLength > 0 ? 'd-flex' : 'd-none'} row justify-content-center mt-4 mb-5`}>

            {
              <span onClick={() => prevPage()}> Prev </span>
            }

            <p> ---  Page {(pager + pageGap) / pageGap}  [{queryLength} - {pager}]--- </p>

            { /** Page gap defined in drupal view is 10 */
              <span onClick={() => nextPage()}> Next </span>
            }

          </div>
          <BlogSearchBg />
        </div>
      </div>
    </div>
  )
}
export default BlogSearch