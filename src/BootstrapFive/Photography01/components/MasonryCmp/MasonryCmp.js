import React from 'react';
import './MasonryCmp.scss';
import Masonry from 'react-masonry-css';





function MasonryCmp(props) {

  const { data } = props;

  const breakpointColumnsObj = {
    default: 3,
    1100: 3,
    700: 2,
    500: 1
  };


  return (
    <div className="photography-one">
      <Masonry
        breakpointCols={breakpointColumnsObj}
        className="my-masonry-grid"
        columnClassName="my-masonry-grid_column">
        {/* array of JSX items */}
        {
          data.length > 0
          && data.map((item, index) => {
            return <div key={index}>
              <img style={{ maxWidth: "100%", height: "auto" }} src={item.image} alt="gallery" />
            </div>
          })
        }

      </Masonry>
    </div>
  )
}

export default MasonryCmp
