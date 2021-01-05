import React from 'react'

function Form(props) {
  return (

    <form onSubmit={props.handleSubmit(props.onSubmit)}>

      <div className="form-group">
        <label for="InputName">Name</label>
        <input
          type="text"
          name="name"
          className="form-control"
          ref={props.register({ required: true })}
        />
        {props.errors.name &&
          <small className="form-text text-muted">
            Required</small>}
      </div>

      <div className="form-group">
        <label for="InputEmail1">Email address</label>
        <input
          type="email"
          name="email"
          className="form-control"
          ref={props.register({ required: true })}
        />
        {props.errors.email &&
          <small className="form-text text-muted">
            Required</small>}
      </div>

      <div class="form-group">
        <label for="FormControlTextarea1">Message</label>
        <textarea
          name="message"
          className="form-control"
          ref={props.register({ required: true })}
          rows="4"></textarea>
        {props.errors.message &&
          <small className="form-text text-muted">
            Required</small>}
      </div>
      <button type="submit" className="btn btn-light">Submit</button>
    </form>

  )
}

export default Form
