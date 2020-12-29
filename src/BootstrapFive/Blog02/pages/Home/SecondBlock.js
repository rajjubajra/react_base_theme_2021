import React from 'react'
import DangerouslySetInnerHtml from '../Utilities/DangerouslySetInnterHtml';
import { DayMonthCommaYear } from '../Utilities/DateFormat';
import { Link } from 'react-router-dom';
import { pagelink } from '../../PageLink';
import SecondBlockDesktop from './SecondBlockDesktop';
import SecondBlockMobile from './SecondBlockMobile';




function SecondBlock(props) {

  //console.log(props.data.length && props.data);


  const linkStyle = {
    position: "absolute",
    bottom: "5px",
    right: "20px",
    border: "1px solid #ccc",
    padding: "3px 18px"
  }

  return (
    <>
      <div className="row">
        <div className="col">
          <h1>Blogs</h1>
        </div>
      </div>
      <div className='row mt-5'>
        {
          props.data.length > 0
            ? props.data.map(item => {
              const { nid, title, created, body } = item;
              return <div key={nid}>

                <div className="d-none d-md-block d-lg-block d-xl-block">
                  <SecondBlockDesktop
                    nid={nid}
                    title={title}
                    created={created}
                    body={body} />
                </div>

                <div className="d-block d-md-none d-lg-none d-xl-none">
                  <SecondBlockMobile
                    nid={nid}
                    title={title}
                    created={created}
                    body={body} />
                </div>
              </div>
            })
            : <div className="d-flex justify-content-center">
              'LOADING...'</div>
        }
      </div>
    </>
  )
}

export default SecondBlock
