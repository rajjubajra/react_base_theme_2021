import React from 'react'
import ButtonGroup from './ButtonGroup';
import Title from '../global/Title';
import GroupItems from './GroupItems';
import { useInView } from 'react-intersection-observer';


function Projects() {

  const [refProject, inViewProject] = useInView({
    threshold: 0.15,
  })
  return (
    <div className="container" ref={refProject}>
      <div className="row">
        <div className="col">
          <Title title="Projects" />
        </div>
      </div>
      <div className='row mt-3 mb-3'>
        <div className="col">
          <ButtonGroup />
        </div>
      </div>
      <div className={`row ${inViewProject ? 'fade-in' : 'fade-out'}`}>
        <div className="col">
          <GroupItems />
        </div>
      </div>
    </div>
  )
}

export default Projects