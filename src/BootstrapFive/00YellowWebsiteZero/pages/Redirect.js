import React, { useEffect } from 'react'
import { useHistory } from 'react-router-dom';

function Redirect(props) {

  const history = useHistory();


  //console.log("PROPS", props);



  useEffect(() => {
    props.location.state.type === 'external' ?
      /** OPEN NEW PAGE  */
      window.open(props.location.state.link, '_blank') &&
      /** GO BACK TO THE PAGE */
      history.goBack()
      : window.location = props.location.state.link

  }, [history, props.location.state.link, props.location.state.type])

  return (
    <div className="min-vh-100 d-flex justify-content-center align-items-center">
      <h2>Redirecting.....</h2>
    </div>
  )
}

export default Redirect
