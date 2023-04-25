import React, {useEffect, useState} from 'react'
import "./TodoCalendar.css"
import { useRecoilState } from 'recoil';
import { eventAtom } from '../../State';
import { Calendar, dateFnsLocalizer } from "react-big-calendar";
import format from "date-fns/format";
import startOfWeek from "date-fns/startOfWeek";
import getDay from "date-fns/getDay";
import { Formik, Form, Field, ErrorMessage } from 'formik';
import Datepicker from "react-datepicker";
import * as Yup from "yup"
import { toDate } from 'date-fns'
import { isValid, parseISO, parse } from 'date-fns'

const DatepickerField = ({
  field, 
  form, 
  ...props
}) => (
  // OR const { setFieldValue } = form;
  // OR const { value, name } = field;
  <div style={{ position:"relative", zIndex:"999" }}>
    <Datepicker
      showTimeInput
      dateFormat="yyyy-MM-dd HH:mm:ss"
      {...field}
      popperPlacement="right"
      selected={field.value}
      onChange={(val) => form.setFieldValue(field.name, val)}
    />
  </div>
);

const locales = {
  "en-US" : require("date-fns/locale/en-US")
};

const schema = Yup.object({
  title: Yup.string().required(),
  start: Yup.string().required(),
  end: Yup.string().required(),
  cat: Yup.string().required("Category Is Required")
})


const localizer = dateFnsLocalizer({
  format,
  parse,
  startOfWeek,
  getDay,
  locales
});


export function TodoCalendar() {


  const [allEvents, setAllEvents] = useRecoilState(eventAtom)

  useEffect(() => {
    console.log(allEvents)
  }, [])


  return (
    <div>
      <div>
        <Calendar
          localizer={localizer}
          events={allEvents}
          startAccessor="start"
          endAccessor="end"
          className='calendar'
          eventPropGetter={(allEvents) => {
            const backgroundColor = allEvents.cat === "payment" ? "green":  allEvents.cat === "important"?  'red' : "blue";
            return { style: {backgroundColor}}
          }}/>
      </div>
      
      <div className='addEvent'>
        <Formik 
          validationSchema={schema}
          initialValues={{
            title: "", 
            start: "", 
            end: "",
            cat: ""
          }}
          
          onSubmit={(data) => {
            setAllEvents([...allEvents, data])
            console.log(allEvents)
          }}>
            
          <Form className='input-group has-validation' style={{display: "flex",flexDirection: "column",gap: "0.5rem"}}>
            <Field name="title" type="text" placeholder='Add Title' className='w-full' />
            <ErrorMessage name='title' component="span" className='error'/>
            <Field name="start" type="datetime-local" placeholder='Start Date'  component={DatepickerField}/>
            <ErrorMessage name="start" component="span"  className='error'/>
            <Field name="end" type="datetime-local" placeholder='End Date'  component={DatepickerField} />
            <ErrorMessage name="end" component="span"  className='error'/>
            <Field name="cat" as="select" placeholder='Category' >
              <option value="" label='Select a Category'></option>
              <option value="payment">Payment</option>
              <option value="important">Important</option>
              <option value="other">Other</option>
            </Field>
            <ErrorMessage name="cat" component="span"  className='error'/>
            <button type='reset' className="btn btn-outline-primary">
              Reset 
            </button>
            <button type='submit' className="btn btn-primary">
              Add Event
            </button>
          </Form>
        </Formik>
      </div>
    </div>
  )
}


export default TodoCalendar