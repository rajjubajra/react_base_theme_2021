import React from 'react';
import ServiceTitle from './ServiceTitle';
import ServiceList from './ServiceList';
import { useInView } from 'react-intersection-observer';

function Services() {
  const [refServices, inVeiwServices] = useInView({
    threshold: 0.3,
  })


  return (
    <div className="container" ref={refServices}>
      <div className="row justify-content-center">
        <ServiceTitle />
        <ServiceList css_class={inVeiwServices ? 'fade-in' : 'fade-out'} />
      </div>
    </div>
  )
}

export default Services
