import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { ActionFetchTaxonomy } from './Redux/ActionFetchTaxonomy';
import TaxonomyDesktop from './TaxonomyDesktop';
import TaxonomyMobile from './TaxonomyMobile';


function Taxonomy() {

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(ActionFetchTaxonomy())
  }, [dispatch])



  return (
    <div className="container">
      <div className="row d-none d-lg-block d-xl-block">
        <TaxonomyDesktop />
      </div>
      <div className="row d-block d-sm-block d-md-block d-lg-none d-xl-none">
        <TaxonomyMobile />
      </div>
    </div>
  )
}

export default Taxonomy