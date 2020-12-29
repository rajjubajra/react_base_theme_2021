import React, { useEffect } from 'react'
import Text from './Text';
import { useDispatch } from 'react-redux';
import { actionFetchLandingPage } from '../Redux/ActionFetchLandingPage';
import Image from './Image';



const data = [
  {
    id: 1,
    title: 'Ipsum dolor sit amet',
    body: '<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit inventore voluptatem harum natus impedit reprehenderit cupiditate laudantium sequi voluptate doloribus, cum cumque sapiente consequuntur nam provident expedita voluptatum! Vel, tenetur!</P>'
  }
]

function BoxNine() {

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(actionFetchLandingPage());
  }, [dispatch]);





  return (
    <div>
      {/** desktop and tablet lg, md and xl */}
      <div className="container">
        <div className="row">
          <div className="col-lg-6 d-none d-lg-block">
            <div style={{ height: "100vh", display: "flex", justifyContent: "center", alignItems: "center" }}>
              <Image width="200px" height="400px" />
            </div>
          </div>
          <div className="col-lg-6 d-none d-lg-block">
            <div style={{
              display: "flex",
              alignItems: "center",
              height: "80vh",
            }}>
              <Text data={data} />
            </div>
          </div>
        </div>

        {/** Visible  Midium device */}
        <div className="row mt-5">
          <div className="col-lg-8 d-none d-md-block d-lg-none">
            <Image width="300px" height="400px" />
          </div>
          <div className="col-lg-8 d-none d-md-block d-lg-none mt-5">
            <Text data={data} />
          </div>
        </div>


        {/** Visible  Small device */}
        <div className="row">
          <div className="col-lg-8 d-none d-sm-block d-md-none">
            <Image width="100%" height="200px" />
          </div>
          <div className="col-lg-8 d-none d-sm-block d-md-none mt-5">
            <Text data={data} />
          </div>
        </div>

        {/** Visible Extra Small device */}
        <div className="row">
          <div className="col-lg-8 d-block d-sm-none">
            <Image width="100%" height="300px" />
          </div>
          <div className="col-lg-8 d-block d-sm-none mt-5">
            <Text data={data} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default BoxNine
