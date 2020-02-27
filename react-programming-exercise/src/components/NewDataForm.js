
import React from 'react'
import { render } from 'react-dom'
// import Styles from './Styles'
import { Form, Field } from 'react-final-form'
import { constValues } from '../utils/constValues'
import InputElm from './InputElm'

/**
 * This form is used to add Data
 */



const NewDataForm = ({addNewData}) => {
  /**
   * 
   * @param {Obj} values The data from the form
   */
  const onSubmit = async values => {
    addNewData(values)
  }

  return (
  <Form
    onSubmit={onSubmit}
    render={({ handleSubmit, form, submitting, pristine, values }) => (
      <form onSubmit={handleSubmit}>

      <h2>Insert data into the form</h2>

      <InputElm textVal={constValues.id} />
      <InputElm textVal={constValues.box_id} />
      <InputElm textVal={constValues.sensor_type} />
      <InputElm textVal={constValues.range_l} />
      <InputElm textVal={constValues.range_u} />
      <InputElm textVal={constValues.longitude} />
      <InputElm textVal={constValues.latitude} />
      <InputElm textVal={constValues.reading} />
      <InputElm textVal={constValues.reading_ts} />
      <InputElm textVal={constValues.unit} />

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
export default NewDataForm;
