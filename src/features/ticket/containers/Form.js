import React from 'react';
import { Field, reduxForm } from 'redux-form';
import Severity from '../../../components/Severity';

let TicketForm = props => {
  const { handleSubmit } = props
  return (
    <form onSubmit={ handleSubmit }>
      <div>
        <label className="form__label" htmlFor="subject">Subject</label>
        <Field className="form__control" name="subject" component="input" type="text" />
      </div>
      <div>
        <label className="form__label" htmlFor="requestedBy">Requested by</label>
        <Field className="form__control" name="requestedBy" component="input" type="text" />
      </div>
      <Severity />
      <div>
        <label className="form__label" htmlFor="email">Description</label>
        <Field className="form__control" name="description" component="textarea" />
      </div>
      <button type="submit">SUBMIT</button>
      <button type="submit">CANCEL</button>
    </form>
  )
}

TicketForm = reduxForm({
  form: 'ticket'
})(TicketForm)

export default TicketForm;