import React from 'react'
import BtnReadMore from './Buttons/BtnReadMore';
import Input from './Form/Input';
import TextArea from './Form/TextArea';
import Submit from './Form/Submit';
import BtnNext from './Buttons/BtnNext';
import BtnPrev from './Buttons/BtnPrev';
import Paragraph from './Paragraph/Paragraph';
import CardnImage from './CardnImage';
import Accordian from './Accordian/Accordian';



function Components() {


  return (
    <div className="container">
      <div className="row">
        <div className="col-lg-6">
          <h2>Buttons</h2>

          {/** READ MORE BUTTON */}
          <div className="my-5">
            <p>Read more button</p>
            <BtnReadMore />
          </div>

          {/** NEXT / PREV BUTTON */}
          <div className='d-flex'>
            <div className="mx-2"><BtnPrev /></div>
            <div className="mx-2"><BtnNext /></div>
          </div>

        </div>
        <div className="col-lg-6">

          {/** FORM COMPONENT */}
          <h2>Form</h2>
          <Input value="" name="" placeholder="Placeholder" />
          <TextArea placeholder="Placeholder" />
          <Submit />


        </div>
      </div>
      <div className="row my-5">
        <div className="col-lg-4">
          <CardnImage />
        </div>
        <div className="col-lg-8">
          <Accordian />
        </div>
      </div>
      <div className="row my-5">
        {/** PARAGRAPH / TEXT */}
        <div className="col-lg-12">
          <Paragraph />
        </div>
      </div>
    </div>
  )
}

export default Components
