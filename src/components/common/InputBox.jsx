import React from 'react';

const InputBox = ({textarea, className, handleChange}) => {

  return (
    <>
      { 
        !textarea ?
        <input className={className} onChange={handleChange}/>:
        <textarea className={className} onChange={handleChange}/>
      }
    </>
  )
}

export default InputBox;