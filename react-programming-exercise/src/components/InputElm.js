import React, { useState } from 'react';
import { Field } from 'react-final-form'

function InputElm({textVal}) {

  return (
    <div> 
      <Field
        name={textVal}
        component="input"
        type="text"
        placeholder={textVal}
      />
      <label><strong>{textVal}</strong></label>
  </div>
  );
}

export default InputElm;