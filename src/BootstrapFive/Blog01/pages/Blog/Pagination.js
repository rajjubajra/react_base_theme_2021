import React from 'react';
import BoxArrowInLeft from '../../components/Icon/BoxArrowInLeft';
import BoxArrowInRight from '../../components/Icon/BoxArrowInRight';



function Pagination(props) {



  return (
    <div className="row mt-4 mb-5" >
      <div className="d-flex justify-content-center">

        {
          <span onClick={() => props.prevPage()}> <BoxArrowInLeft /> </span>
        }

        <p className="ml-5 mr-5">
          Page  -  {(props.pager + props.pageGap) / props.pageGap}
          <span className="small-font ml-2"> [{props.dataLength} - {props.pager}] </span>
        </p>

        { /** Page gap defined in drupal view is 10 */
          <span onClick={() => props.nextPage()}> <BoxArrowInRight /> </span>
        }
      </div>
    </div>
  )
}

export default Pagination
