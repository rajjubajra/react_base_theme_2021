import React, { useState, useEffect } from 'react';
import './BlogByTaxonomy.scss';
import NavigationOne from '../../components/header/NavigationOne/NavigationOne';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { ActionFetchBlogByTaxonomy } from './Redux/ActionFetchBlogByTaxonomy';
import ColourMode from '../../components/ColourMode/ColourMode';
import Title from '../../components/header/Titlte/Title';
import BlogByTaxonomyDesktop from './BlogByTaxonomyDesktop';
import BlogByTaxonomyTablet from './BlogByTaxonomyTablet';
import BlogByTaxonomyMobile from './BlogByTaxonomyMobile';
import Footer from '../../components/footer/Footer';



function BlogByTaxonomy(props) {
  /** dyanamic color */
  const className = useSelector(state => state.reducerSelectColourMode.colourMode);
  //const ColourVariant = useSelector(state => state.reducerSelectColourMode.variant);



  /** TAXONOMY ID [useParams()] */
  const { tid } = useParams();

  /** BY YEAR AND MONTH TAXONOMY VIEW */
  /**
   * PASS Year and month [YYYYMM]
   * Drupal view Contexual filter sorts data by month
   */
  const month = useSelector(state => state.ReducerBlogSelectedDate.month);
  const year = useSelector(state => state.ReducerBlogSelectedDate.year);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(ActionFetchBlogByTaxonomy(tid, year, month));
  }, [dispatch, month, tid, year])

  const data = useSelector(state => state.ReducerFetchBlogByTaxonomy.data);
  const fetched = useSelector(state => state.ReducerFetchBlogByTaxonomy.fetched);


  /** PAGINATION */
  const initial = 0;
  const pageGap = 8;
  const dataLength = fetched && data.length;

  const [pager, setPager] = useState(initial);

  /**This useEffect will be 
   * implimented while back to the page 
   * from ReadMore page. In order to set the
   * existing page number
   */
  const pagerStored = useSelector(state => state.ReducerPager.pager);
  useEffect(() => {
    pagerStored > 0 && setPager(pagerStored);
  }, [pagerStored])


  const nextPage = () => {
    pager < (dataLength - pageGap) &&
      setPager(prevState => prevState + pageGap)
  }

  const prevPage = () => {
    pager >= pageGap &&
      setPager(prevState => prevState - pageGap)
  }

  const slicedData = fetched && data.slice(pager, pager + pageGap);
  /** PAGINATION closed**************/


  /** LOADING MESSAGE */
  /** IF Year/Month both are not selected following message is displyed */
  const LoadingMessage = (year, month) => {
    if (year === '' || month === '') {
      return "Please select Year and Month";
    } else {
      return "Loading";
    }
  }

  /** Get Taxonomy Name */
  const taxonomy = useSelector(state => state.ReducerFetchTaxonomy.data);
  const taxoFetched = useSelector(state => state.ReducerFetchTaxonomy.fetched);
  const [taxoName, setTaxoName] = useState();

  console.log("mmmm", taxoFetched, taxonomy, taxoName);

  useEffect(() => {
    const isTaxoName = taxoFetched && taxonomy.find(function (item) {
      return item.tid === tid && item.name
    })
    taxoFetched && setTaxoName(isTaxoName.name);
  }, [taxoFetched, taxonomy, tid])



  return (
    <div className="blog-three">


      <div className={className}>
        <ColourMode />
        {/** MAIN NAVIGATION */}
        <NavigationOne />


        <div className={`container-fluid mt-5 mb-5`}>

          {/** TITLE ON MOBILE ONLY */}
          <div className="d-block d-md-none d-lg-none d-xl-none">
            <div className="row">
              <div className="col">
                <Title title="Blogs" />
              </div>
            </div>
          </div>

          {/** BLOG */}
          {/** DESKTOP VIEW */}
          <div className="row blog-by-taxonomy d-none d-lg-block d-xl-block">
            <BlogByTaxonomyDesktop
              taxoName={taxoName}
              fetched={fetched}
              slicedData={slicedData}
              pager={pager}
              pageGap={pageGap}
              dataLength={dataLength}
              prevPage={prevPage}
              nextPage={nextPage}
              LoadingMessage={LoadingMessage}
            />
          </div>
          {/** TABLET VIEW */}
          <div className="row blog-by-taxonomy d-none d-md-block d-lg-none">
            <BlogByTaxonomyTablet
              taxoName={taxoName}
              fetched={fetched}
              slicedData={slicedData}
              pager={pager}
              pageGap={pageGap}
              dataLength={dataLength}
              prevPage={prevPage}
              nextPage={nextPage}
              LoadingMessage={LoadingMessage}
            />
          </div>
          {/** MOBILE VIEW */}
          <div className="row blog-by-taxonomy d-block d-md-none d-lg-none d-xl-none">
            <BlogByTaxonomyMobile
              taxoName={taxoName}
              fetched={fetched}
              slicedData={slicedData}
              pager={pager}
              pageGap={pageGap}
              dataLength={dataLength}
              prevPage={prevPage}
              nextPage={nextPage}
              LoadingMessage={LoadingMessage}
            />
          </div>
        </div>

        <Footer />
      </div>
    </div>
  )
}
export default BlogByTaxonomy