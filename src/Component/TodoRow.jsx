import React, { useState } from 'react';
import Checkbox from './Checkbox';
import Button from './Button';

function TodoRow({ label, index, deleteItem }) {

  const [disp, setDisp] = useState('none');

  const showCancel = () => {
    if (disp === 'none') {
      setDisp('block');
    } else {
      setDisp('none');
    }
  };

  return (
    <div className="form-check" style={{display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center', margin: '1rem 22rem', position: 'relative'}} onMouseEnter={showCancel} onMouseLeave={showCancel}>
      <Checkbox labelcheck={label} />
      <label className="form-check-label" htmlFor={label} style={{padding: '1rem', textAlign: 'center', display: 'inline-block', wordWrap: 'break-word', maxWidth: '25rem', cursor:'pointer'}}>
        {label}
      </label>
      <Button deleteItem={deleteItem} index={index} disp={disp}/>
    </div>
  );
}

export default TodoRow;
