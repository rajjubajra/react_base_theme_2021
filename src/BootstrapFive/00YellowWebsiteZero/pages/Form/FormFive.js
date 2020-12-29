import React, { useState } from 'react';
import './FormFive.scss';
import axios from 'axios';



const FormFive = () => {

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [error, setError] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [confirmationMsg, setConfirmationMsg] = useState('');



  const baseUrl = `https://yellow-website.com/d8-react-base-theme-backend`;
  const formId = 'contact_form';


  function handleSubmit(e) {

    e.preventDefault();


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


  const inputStyle = {
    borderTop: "0px",
    borderLeft: "0px",
    borderRight: "0px",
    outline: "none"
  }


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


        <div className="col-9">

          <div className="mb-5">
            <h3>Please send your enquiry</h3>
          </div>


          <form className="form-5 mt-5" onSubmit={handleSubmit}>

            <div className="form-group">

              <input
                required
                style={inputStyle}
                className="form-control"
                type="text"
                name="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Name"
              />
              {error && name.length < 2 &&
                <p className="small-font">Required field</p>}
            </div>

            <div className="form-group">

              <input
                required
                style={inputStyle}
                className="form-control"
                type="email"
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Email" />
              {error && email.length < 6 &&
                <p className="small-font">required field</p>}
            </div>

            <div className="form-group">

              <textarea
                required
                style={inputStyle}
                className="form-control"
                name="message"
                rows="4"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Message" >
              </textarea>
              {error && message < 3 &&
                <p className="small-font">required field</p>}
            </div>

            <div className="form-group">
              <button type="submit">Submit</button>
            </div>

          </form>
        </div>
      </div>
    </div >
  )
}

export default FormFive