import React from 'react';
import { Field } from 'react-final-form'

function InputElm({textVal, validate}) {

  return (
    <div className="InputElm form-group"> 
    <Field name={textVal} validate={validate}>
      {({ input, meta }) => (
        <div>
          <label htmlFor={textVal} className="font-weight-bold">{textVal}</label>
          <input {...input} type="text" placeholder="" id={textVal} name={textVal} className="form-control" />
          {meta.error && meta.touched && <span className="text-danger">{meta.error}</span>}
        </div>
      )}
    </Field>
  </div>
  );
}

export default InputElm;
