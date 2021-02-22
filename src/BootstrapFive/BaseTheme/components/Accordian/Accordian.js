import React, { useState } from 'react';
import styled from 'styled-components';


const data = [
  {
    id: 1,
    title: "Accordion Item #1",
    text: "<strong>This is the first item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classNamees that we use to style each element. These classNamees control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow."
  },
  {
    id: 2,
    title: "Accordion Item #2",
    text: " <strong>This is the second item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classNamees that we use to style each element. These classNamees control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow."
  },
  {
    id: 3,
    title: "Accordion Item #3",
    text: " <strong>This is the second item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classNamees that we use to style each element. These classNamees control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow."
  }
]





function Accordian() {


  const [showIndex, setShowIndex] = useState(0);


  return (
    <div className="mt-2">
      {
        data.length > 0 && data.map((item, index) => {
          return <div key={index} className="accordion-item">
            <h2 className="accordion-header" id="headingOne">
              <button
                onClick={() => setShowIndex(index)}
                className={`accordion-button ${showIndex !== index && 'collapsed'}`} type="button" >
                {item.title}
              </button>
            </h2>
            <div id="collapseOne" className={`accordion-collapse collapse ${showIndex === index && 'show'}`} >
              <div className="accordion-body">
                <div dangerouslySetInnerHTML={{ __html: item.text }} />
              </div>
            </div>
          </div>
        })
      }
    </div>
  )
}

export default Accordian
