import React from 'react'

function Button({deleteItem, index, disp}) {
  return (
    <>
    <button type="button" class="btn btn-primary" onClick={()=>deleteItem(index)} style={{position:'absolute', right: '5rem', display:disp}}>X</button>
    </>
  )
}

export default Button
