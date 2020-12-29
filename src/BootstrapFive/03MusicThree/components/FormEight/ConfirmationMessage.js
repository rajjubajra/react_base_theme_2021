import React from 'react'

function createMarkup(txt) {
  return {
    __html: txt
  };
};

function ConfirmationMessage(props) {
  return (
    <div className="card">
      <h5 className="card-header">Memembership Submited</h5>
      <div className="card-body">
        <h5 className="card-title">Thank you {props.name}</h5>
        <div className="card-text">
          <div dangerouslySetInnerHTML={createMarkup(props.confirmationMsg)} />
        </div>
        <span className="btn btn-light mt-3">Back</span>
      </div>
    </div>
  )
}

export default ConfirmationMessage
