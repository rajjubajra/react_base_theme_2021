import React from 'react'
import Button from './Button';


function ButtonGroup() {
  return (
    <div className="button-group">
      <Button name="All" datafilter="*" />
      <Button name="Orchid" datafilter=".orchid" />
      <Button name="Tulip" datafilter=".tulip" />
      <Button name="Japanese" datafilter=".japanse" />
      <Button name="Upcoming" datafilter=".upcoming" />
    </div>
  )
}

export default ButtonGroup