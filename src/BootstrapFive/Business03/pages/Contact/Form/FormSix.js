import React, { useState } from 'react';
import './FormSix.scss';
import { useForm } from 'react-hook-form';
import axios from 'axios';




const FormSix = () => {

  /** axios response.status = 200, submited set to true */
  const [submited, setSubmited] = useState(false);

  /** react-hook-form  elements */
  const { register, handleSubmit, watch, errors } = useForm();

  /** d8-react-base-theeme-backend webform "Contact Form" rest api uri */
  const formUrl = 'https://yellow-website.com/d8-react-base-theme-backend/webform_rest/submit?_format=json';


  const onSubmit = (data) => {

    axios.post(formUrl, {
      "webform_id": "contact_form",
      "name": data.name,
      "email": data.email,
      "message": data.message
    },
      {
        headers: {
          'contetn-type': 'application/json',
          /** auth token for same domain name submit via cookies  */
          'csrf_token': 'https://yellow-website.com/d8-react-base-theme-backend/rest/session/token'
        }
      }
    )
      .then(function (res) {
        console.log("form res", res, "Status", res.status);
        res.status === 200 ? setSubmited(true) : setSubmited(false);
      })
      .catch(function (err) {
        console.log("form err", err)
      });
    console.log("DATA", data);
  }

  console.log(watch("email"));

  const inputStyle = {
    outline: "none"
  }


  /** state for OnFocus Event */
  const [name, setName] = useState(true);
  const [email, setEmail] = useState(true);
  const [message, setMessage] = useState(true);

  return (
    <div className="container mb-5">
      <div className="row justify-content-center mb-5 mt-5">
        <div className="col-9">
          <h3>Contact Form</h3>
          <p className={`${submited ? '' : 'd-none'}`}>Thank you. Messaged submited.</p>
        </div>
      </div>
      <div className={`row ${submited ? 'd-none' : ''} justify-content-center`}>
        <div className="col-9">

          <form className="form-6" onSubmit={handleSubmit(onSubmit)}>

            <div className="row">
              <div className="col-lg-6 col-md-6 co-xs-12">
                <div className="form-group">

                  <input
                    style={inputStyle}
                    className="form-control"
                    type="text"
                    name="name"
                    onMouseDown={() => setName(false)}
                    onMouseLeave={() => setName(true)}
                    placeholder={name ? 'Name' : ''}

                    ref={register({ required: true })}
                  />
                  {errors.name && <p className="small-font">Required field</p>}
                </div>
              </div>
              <div className="col-lg-6 col-md-6 col-xs-12">
                <div className="form-group">

                  <input
                    style={inputStyle}
                    className="form-control"
                    type="email"
                    name="email"
                    onMouseDown={() => setEmail(false)}
                    onMouseLeave={() => setEmail(true)}
                    placeholder={email ? 'Email' : ''}
                    ref={register({ required: true })} />
                  {errors.email && <p className="small-font">required field</p>}
                </div>
              </div>
            </div>

            <div className="form-group">
              <textarea
                style={inputStyle}
                className="form-control"
                name="message"
                onMouseDown={() => setMessage(false)}
                onMouseLeave={() => setMessage(true)}
                placeholder={message ? 'Message' : ''}
                rows="4"
                ref={register({ required: true })} >
              </textarea>
              {errors.message && <p className="small-font">required field</p>}
            </div>

            <div className="form-group">
              <button
                type="submit"
                className="px-5 mt-3 btn btn-light" >Submit</button>
            </div>

          </form>
        </div>
      </div>
    </div>
  )
}

export default FormSix