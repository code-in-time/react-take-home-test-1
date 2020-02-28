import React, { useState } from 'react';
import { Field } from 'react-final-form'

function InputElm({textVal}) {

  return (
    <div className="InputElm form-group"> 
      <label for={textVal} className="font-weight-bold">{textVal}</label>
      <Field
        id={textVal}
        name={textVal}
        component="input"
        type="text"
        placeholder=""
        className="form-control"
      />
  </div>
  );
}

export default InputElm;