
import React from 'react';
import { connect } from "react-redux";
import { Form } from 'react-final-form'
import { constValues } from '../utils/constValues'
import InputElm from './InputElm'
import { actionSensorReducerSaveRow } from '../store/sensorReducer'
import { required } from '../utils/formValidationHelpers';

/**
 * This form is used to add Data
 */

const NewDataForm = (props) => {
  /**
   * 
   * @param {Obj} values The data from the form
   */
  const onSubmit = async values => {
    console.log('values', values);
    props.actionSensorReducerSaveRow(values);
    alert('saved click on [>>] to see the last page in the form')
  }

  return (
    <Form
      onSubmit={onSubmit}
      render={({ handleSubmit, form, submitting, pristine, values }) => (
        <form onSubmit={handleSubmit}>

          <h2>Insert data into the form</h2>

          <InputElm textVal={constValues.id} validate={required} />
          <InputElm textVal={constValues.box_id} validate={required} />
          <InputElm textVal={constValues.sensor_type} validate={required} />
          <InputElm textVal={constValues.range_l} validate={required} />
          <InputElm textVal={constValues.range_u} validate={required} />
          <InputElm textVal={constValues.longitude} validate={required} />
          <InputElm textVal={constValues.latitude} validate={required} />
          <InputElm textVal={constValues.reading} validate={required} />
          <InputElm textVal={constValues.reading_ts} validate={required} />
          <InputElm textVal={constValues.unit} validate={required} />

          <div className="buttons">
            <button type="submit" disabled={submitting || pristine}>
              Submit
        </button>
            <button
              type="button"
              onClick={form.reset}
              disabled={submitting || pristine}
            >
              Reset
        </button>
          </div>
          <pre>{JSON.stringify(values, 0, 2)}</pre>
        </form>
      )}
    />
  )
}

const mapDispatchToProps = {
  actionSensorReducerSaveRow
};

export default connect(null, mapDispatchToProps)(NewDataForm)
