import React, { useState, useEffect } from 'react';

function ClockKathmandu() {


  const [time, setTime] = useState('');

  function msToTime(duration) {
    var milliseconds = parseInt((duration % 1000) / 100),
      seconds = Math.floor((duration / 1000) % 60),
      minutes = Math.floor((duration / (1000 * 60)) % 60),
      hours = Math.floor((duration / (1000 * 60 * 60)) % 24);

    hours = (hours < 10) ? "0" + hours : hours;
    minutes = (minutes < 10) ? "0" + minutes : minutes;
    seconds = (seconds < 10) ? "0" + seconds : seconds;

    return hours + ":" + minutes + ":" + seconds + "." + milliseconds;
  }

  const duration = (((5 * 60) + 45) * 60000) + Date.now();

  useEffect(() => {

    setTime(msToTime(duration))

  }, [duration])

  return (<>{time}</>)

}

export default ClockKathmandu
