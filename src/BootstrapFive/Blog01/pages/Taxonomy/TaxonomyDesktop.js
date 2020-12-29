import React from 'react';
import { useSelector } from 'react-redux';
import { pagelink } from '../../PageLink';
import { Link } from 'react-router-dom';


function TaxonomyDesktop() {


  const data = useSelector(state => state.ReducerFetchTaxonomy.data);
  const fetched = useSelector(state => state.ReducerFetchTaxonomy.fetched);
  /** SELECTED TAXONOMY ON FOR THE BLOG */
  const taxoIdSelected = useSelector(state => state.ReducerFetchBlogByTaxonomy.taxoId);

  const ulStyle = {
    display: "flex",
    listStyle: "none",
    marginBottom: "20px",
  }

  const liStyle = {
    margin: "0px 8px",
    textTransform: "uppercase"
  }


  return (
    <div>
      <ul style={ulStyle}>
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
                      className="medium-font"
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
  )
}

export default TaxonomyDesktop