import React, { useState } from 'react';
import './FormSix.scss';
import axios from 'axios';



const FormSix = () => {

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [confirmationMsg, setConfirmationMsg] = useState('');

  //console.log(name, email, state, country);

  const baseUrl = `https://yellow-website.com/d8-react-base-theme-backend`;
  const formId = 'contact_form';


  function handleSubmit(e) {
    e.preventDefault();
    //console.log(name, email, message);
    axios(
      {
        method: 'post',
        url: `${baseUrl}/webform_rest/submit?_format=json`,
        // withCredentials: true,
        headers: {
          'Accept': 'application/vnd.api+json',
          'Content-Type': 'application/json',
          /** auth token for same domain name submit via cookies  */
          'X-CSRF-Token': `${baseUrl}/rest/session/token`
        },
        data: {
          "webform_id": formId,
          "name": name,
          "email": email,
          "message": message,
        }
      },
    )
      .then(function (res) {
        // console.log(res, "Post Status", res.status);
        res.status === 200 ? setSubmitted(true) : setSubmitted(false);
      })
      .catch(function (err) {
        console.log("Post Error message:", err)
      });
    // console.log("DATA submited", submitted);


    /** NOTE: In order to GET the webform message got to 
     * /Settings/Access/ 
     * -> "Access Webform Configuration" [Anonymouse - checked]
     */
    axios({
      method: 'GET',
      url: `${baseUrl}/webform/${formId}?_format=json`,
      withCredentials: true,
      headers: {
        'Accept': 'application/vnd.api+json',
        'Content-Type': 'application/json',
        /** auth token for same domain name submit via cookies  */
        'X-CSRF-Token': `${baseUrl}/rest/session/token`
      }
    })
      .then(function (response) {
        console.log("SUBMIT CONFIRM RES", response);
        //console.log("WEBFORM GET", response.data.settings.confirmation_message);
        setConfirmationMsg(response.data.settings.confirmation_message);
      })
      .catch(function (err) {
        console.log("web form GET error", err);
      })
    console.log("GET SUBMITED")

    /** submited get closed */
  }

  console.log("CNS MSG", confirmationMsg);

  return (
    <div className="container">
      <div className="row justify-content-center mb-5">
        <div className="col-10">
          <p className={`${submitted ? '' : 'd-none'}`}>
            {confirmationMsg}
          </p>
        </div>
      </div>
      <div className={`row ${submitted ? 'd-none' : ''} justify-content-center`}>


        <div className="col-10">

          <h3>Please Send your enquiry</h3>

          <form className="form-6 mt-5" onSubmit={handleSubmit}>

            <div className="row">
              <div className="col-lg-6 col-md-6 co-xs-12">
                <div className="form-group">

                  <input
                    required
                    className="form-control"
                    type="text"
                    name="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Name"
                  />

                </div>
              </div>
              <div className="col-lg-6 col-md-6 col-xs-12">
                <div className="form-group">

                  <input
                    required
                    className="form-control"
                    type="email"
                    name="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Email"
                  />

                </div>
              </div>
            </div>

            <div className="form-group">
              <textarea
                required
                className="form-control"
                name="message"
                rows="4"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Message"
              >
              </textarea>
            </div>

            <div className="form-group">
              <button type="submit" className="btn btn-light" >
                Submit</button>
            </div>

          </form>
        </div>
      </div>
    </div>
  )
}

export default FormSix