import React from 'react'

function Checkbox(props) {
  return (
    <>
      <input class="form-check-input" type="checkbox" value="" id={props.labelcheck} style={{position:'absolute', left: '9rem'}}></input>
    </>
  )
}

export default Checkbox
