import React from 'react';
import { useSelector } from 'react-redux';
import { pagelink } from '../../PageLink';
import { Link } from 'react-router-dom';


function TaxonomyMobile() {

  const data = useSelector(state => state.ReducerFetchTaxonomy.data);
  const fetched = useSelector(state => state.ReducerFetchTaxonomy.fetched);
  /** SELECTED TAXONOMY ON FOR THE BLOG */
  const taxoIdSelected = useSelector(state => state.ReducerFetchBlogByTaxonomy.taxoId);

  const ulStyle = {
    listStyle: "none",
    marginBottom: "20px",
  }

  const liStyle = {
    margin: "0px",
  }

  return (
    <div className="row">
      <div className="col">
        <ul style={ulStyle}>
          <h3 className="text-uppercase mb-2">Topics</h3>
          {
            fetched
              ? data.map(item => {
                return <li style={liStyle} key={item.tid} >
                  {
                    item.tid === taxoIdSelected
                      ? <b style={{ textDecoration: "underline" }}><Link
                        to={`/${pagelink.blogByTaxonomy}/${item.tid}`}>
                        {item.name}
                      </Link></b>
                      : <Link
                        to={`/${pagelink.blogByTaxonomy}/${item.tid}`}>
                        {item.name}
                      </Link>
                  }
                </li>
              })
              : 'Loading...'
          }
        </ul>
      </div>
    </div>
  )
}

export default TaxonomyMobile