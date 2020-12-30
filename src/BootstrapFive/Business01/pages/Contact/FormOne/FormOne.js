import React, { useState } from 'react';
import axios from 'axios';


/** D8WebForm */
function FormOne() {

  /** axios response.status = 200, submited set to true */
  const [submited, setSubmited] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');


  const baseUrl = `https://yellow-website.com/d8-react-base-theme-backend`;


  console.log("input", name, email, message);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("HANDLE SUBMIT", name, email, message, submited);
    axios({
      method: 'post',
      url: `${baseUrl}/contact_message?_format=json`,
      data: {
        "contact_form": [{ "target_id": "contact_form" }],
        "name": [{ "value": name }],
        "email": [{ "value": email }],
        "message": [{ "value": message }]
      },
      headers: {
        'Accept': 'application/vnd.api+json',
        'Content-Type': 'application/json',
        /** auth token for same domain name submit via cookies  */
        'X-CSRF-Token': `${baseUrl}/rest/session/token`
      }
    })
      .then(function (res) {
        console.log("form res", res, "Status", res.status);
        res.status === 200 ? setSubmited(true) : setSubmited(false);
      })
      .catch(function (err) {
        console.log("form err", err)
      });
  }

  //console.log(watch("email"));


  return (
    <div className="container mt-5 mb-5">
      <div className="row mb-5 mt-5 d-flex justify-content-lg-center">

        <div className="col-9">
          <h3>Contact Form</h3>
          <p className={`${submited ? '' : 'd-none'}`}>Thank you. Messaged submited.</p>
        </div>

      </div>
      <div className={`row 
                        ${submited ? 'd-none' : ''} 
                        justify-content-center`}>

        <div className="col-lg-9">
          <form onSubmit={handleSubmit}>

            <div className="form-group">
              <label>Name</label>
              <input
                type="text"
                name="name"
                className="form-control"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>

            <div className="form-group">
              <label>Email address</label>
              <input
                type="email"
                name="email"
                className="form-control"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            <div className="form-group">
              <label>Message</label>
              <textarea
                name="message"
                className="form-control"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                rows="4"></textarea>
            </div>
            <button
              type="submit"
              className="px-5 mt-2 btn btn-light">Submit</button>
          </form>
        </div>
      </div>
    </div>
  )
}
export default FormOne