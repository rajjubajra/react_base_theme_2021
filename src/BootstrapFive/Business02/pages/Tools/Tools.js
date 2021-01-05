import React from 'react';
import Tool from './Tool';
import ToolsText from './ToolsText';
import { useInView } from 'react-intersection-observer';


// import logo_drupal from '../../../../../images/Portfolio2020/logo_drupal_8.png';
// import logo_bootstrap from '../../../../../images/Portfolio2020/logo_bootstrap.png';
// import logo_javascript from '../../../../../images/Portfolio2020/logo_javascript.png';
// import logo_php_mysql from '../../../../../images/Portfolio2020/logo_php_mysql.png';
// import logo_react_js from '../../../../../images/Portfolio2020/logo_react_js.png';
// import logo_react_bootstrap from '../../../../../images/Portfolio2020/logo_react_bootstrap.png';
// import logo_redux from '../../../../../images/Portfolio2020/logo_redux.png';
// import logo_sass from '../../../../../images/Portfolio2020/logo_sass.png';
// import logo_html5 from '../../../../../images/Portfolio2020/logo_html5.png';

import Title from '../../pages/global/Title';


const data = [
  {
    id: 1,
    logo: "Client One",
    text: "Lorem ipsum dolor.",
    alt: "logo"
  },
  {
    id: 2,
    logo: "Client Two",
    text: "A repellat iusto ea.",
    alt: "logo"
  },
  {
    id: 3,
    logo: "Client Three",
    text: "Ratione in est id",
    alt: "logo"
  },
  {
    id: 4,
    logo: "Client Four",
    text: "Ratione in est id",
    alt: "logo"
  },
  {
    id: 5,
    logo: "Client Five",
    text: "Ratione in est id",
    alt: "logo"
  },
  {
    id: 6,
    logo: "Client Six",
    text: "Ratione in est id",
    alt: "logo"
  },
  {
    id: 7,
    logo: "Client Seven",
    text: "Ratione in est id",
    alt: "logo"
  },
  {
    id: 8,
    logo: "Client Eight",
    text: "Ratione in est id",
    alt: "logo"
  }
]


function Tools() {
  const [refTool, refInView] = useInView({
    threshold: 0.3,
  });

  return (
    <div ref={refTool} className="container tools mt-5">
      <div className="row">
        <div className="col">
          <Title title="Tools" />
        </div>
      </div>

      <div className="row justify-content-center my-5">

        <div className={`${refInView ? 'fade-in' : 'fade-out'} row`}>
          {
            data.map((item, index) => {
              return <div key={index} className="col-lg-3 col-md-4 col-sm-6">
                <Tool logo={item.logo} alt={item.alt} text={item.text} />
              </div>
            })
          }
        </div>

        <div className="col-md-6 col-lg-6 col-xg-3">
          <div className={`${refInView ? 'fadeIn' : 'fadeOut'} 
          row mt-5 ml-4 justify-content-center`}>
            <ToolsText />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Tools