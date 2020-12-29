import React from 'react'
import ServiceItem from './ServiceItem';


const data = [
  {
    id: 1,
    title: "Lorem ipsum dolor",
    text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Corrupti ratione est accusantium dolorem iure aspernatur autem architecto a, asperiores consequuntur sint qui! Assumenda, cupiditate molestias? Iusto, illum! Possimus, omnis commodi!",
    image: "https://yellow-website.com/d8-react-base-theme-backend/sites/default/files/photo_placeholder/people-2557399_640.jpg",
    imgAlert: 'Service 1'
  },
  {
    id: 2,
    title: "Consectetur",
    text: "Consectetur, adipisicing elit. Corrupti ratione est accusantium dolorem iure aspernatur autem architecto a, asperiores consequuntur sint qui! Assumenda, cupiditate molestias? Iusto, illum! Possimus, omnis commodi!",
    image: "https://yellow-website.com/d8-react-base-theme-backend/sites/default/files/photo_placeholder/planning-3536753_640.jpg",
    imgAlert: 'Service 2'
  },
  {
    id: 3,
    title: "Assumenda ipsum",
    text: "Assumenda ipsum dolor sit amet consectetur, adipisicing elit. Corrupti ratione est accusantium dolorem iure aspernatur autem architecto a, asperiores consequuntur sint qui! Assumenda, cupiditate molestias? Iusto, illum! Possimus, omnis commodi!",
    image: "https://yellow-website.com/d8-react-base-theme-backend/sites/default/files/photo_placeholder/landscape-166641_640.jpg",
    imgAlert: 'Service 3'
  },
]



function ServiceList(props) {
  let delay = 0;



  return (
    <div className='row justify-content-center'>
      {
        data.map((item, index) => {
          return <div key={index} className="col-lg-4 col-md-8 col-sm-10">
            <ServiceItem
              key={index}
              img={item.image}
              title={item.title}
              text={item.text}
              alt={item.imgAlert}
              delay={++delay}
              cssclass={props.css_class}
            />
          </div>
        })
      }
    </div>
  )
}

export default ServiceList
