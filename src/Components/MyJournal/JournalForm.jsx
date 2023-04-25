import React, { useState } from 'react'
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import { Formik, Form, Field, ErrorMessage } from 'formik';

export default function DiaryForm({ addItem }) {
    const [title, setTitle] = useState("")
    const [date, setDate] = useState("")
    const [text, setText] = useState("")

    const onSubmit = (event) => {
        event.preventDefault()
        let itemObject = {
            title: title,
            date: date,
            text: text
        }
        addItem(itemObject)
        setTitle("")
        setText("")
        setDate("")
    }

    return (
        <div className='m-4 p-4 w-full h-full'>
            <Formik> 
                <Form onSubmit={onSubmit} className='input-group has-validation' style={{display: "flex",flexDirection: "column",gap: "0.5rem"}}>
                    <Field name="title" type="text" value={title} onChange={(event) => setTitle(event.target.value)} placeholder='Add Title' className='w-full' />
                    <ErrorMessage name='title' component="span" className='error'/>
                    <Field name="date" value={date} onChange={(event) => setDate(event.target.value)} type="date"/>
                    <ErrorMessage name="date" component="span"  className='error'/>
                    
                    <Field name="entry" type="textarea" placeholder='TextArea' value={text} onChange={(event) => setText(event.target.value)} rows="2" />
                    <ErrorMessage name="entry" component="span"  className='error'/>
                    <button type='reset' className="btn btn-outline-primary">
                    Reset 
                    </button>
                    <button type='submit' className="btn btn-primary">
                    Add Event
                    </button>
                </Form>
            </Formik>
        </div>
        
    )
}