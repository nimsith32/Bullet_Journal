import React from 'react'
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from "yup"
import { useRecoilState } from 'recoil';
import { useEffect, useState, useMemo } from 'react';
import { budgetAtom } from '../../State';
import BarChart from './BarChart';
import { all } from 'axios';

const schema = Yup.object({
  title: Yup.string().required("Title Required"),
  amount: Yup.string().required("Amount Required"),
  type: Yup.string().required("Type Required")
})


export function MonthlyBudget(){

  const [allExpenses, setAllExpenses] = useRecoilState(budgetAtom);

  const userData = useMemo(() => { return {
    labels: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
    datasets:[{
      label: "Income",
      data: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
      .map(m =>  
        {return allExpenses.filter(e => e.type === "Income").filter(e => e.month == m).reduce((sum,e) => {return sum + e.amount}, 0)}),
      backgroundColor: [
        "green"
      ],
      borderColor: "green",
      borderWidth: 2,
      },{
        label: "Expense",
        data: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
      .map(m =>  
        {return allExpenses.filter(e => e.type === "Expense").filter(e => e.month == m).reduce((sum,e) => {return sum + e.amount}, 0)}),
        backgroundColor: [
          "red"
        ],
        borderColor: "red",
        borderWidth: 2,
      }
    ],

  }}, [allExpenses]);


  useEffect(() => {
   console.log(allExpenses)
  }, [allExpenses])


  return (
  < >
    <div className='flex flex-row gap-2  '>
    <div className='h-full'>
    <Formik 
      validationSchema={schema}
      initialValues={{
        title: "", 
        amount: 0,
        type:""
      }}

      
      onSubmit={(data) => {
        //const newExpenses = allExpenses
        //newExpenses.push(data)
        setAllExpenses([...allExpenses, data])
        console.log(allExpenses)
        
      }}>
        
      <Form className='m-5 '>
        <Field name="title" type="text"
                placeholder='Enter Transaction' className='w-full m-3' />
        <ErrorMessage name='title' component="span" className='error'/>
        <Field name="amount" type="number"  placeholder='Enter Amount' className='w-full m-3' />
        <ErrorMessage name="amount" component="span"  className='error'/>
        <Field name="month" as="select" placeholder='Month' className='w-full m-3' >
            <option value="" label='Select a Month'></option>
            <option value="January">January</option>
            <option value="February">February</option>
            <option value="March">March</option>
            <option value="April">April</option>
            <option value="May">May</option>
            <option value="June">June</option>
            <option value="July">July</option>
            <option value="August">August</option>
            <option value="September">September</option>
            <option value="October">October</option>
            <option value="November">November</option>
            <option value="December">December</option>
        </Field>
        <ErrorMessage name="type" component="span"  className='error'/>
        <Field name="type" as="select" placeholder='Type' className='w-full m-3' >
            <option value="" label='Select a Type'></option>
            <option value="Income">Income</option>
            <option value="Expense">Expense</option>
        </Field>
        <ErrorMessage name="type" component="span"  className='error'/>
        <div className='flex flex-row m-3'>
          <button type='submit' className="px-3 py-2 m-2 rounded-lg bg-blue-500 text-white hover:bg-white transition hover:text-blue-600 focus:text-blue-600">
            Add Transaction
          </button>
          <button type='reset' className="btn btn-outline-primary m-2 ">
            Reset 
          </button>
        </div>
      </Form>
    </Formik>
    </div> 
    <div className='p-3 ' style={{ width: 900, height: 900 }}>
      <BarChart chartData={userData} />      
    </div>
    <div className="flex absolute flex-col top-100 left-20 right-20 ">
      <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
        <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
          <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr >
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Title
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Amount
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Month
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Type
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {
                  allExpenses.map(
                    (dat, index)=>{
                      return(
                        <tr >
                          <td className="px-6 py-4 whitespace-nowrap">
                            <div className="flex items-center">
                              <div className="ml-4">
                                <div className="text-sm font-medium text-gray-900">{dat.title}</div>
                                <div className="text-sm text-gray-500"></div>
                              </div>
                            </div>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <div className="text-sm text-gray-900">{dat.amount}</div>
                            <div className="text-sm text-gray-500"></div>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <div className="text-sm text-gray-900">{dat.month}</div>
                            <div className="text-sm text-gray-500"></div>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <div className="text-sm text-gray-900">{dat.type}</div>
                            <div className="text-sm text-gray-500"></div>
                          </td>
                        </tr>

                      )
                    }
                  )
                }
                
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
    </div>
  </>
   
  )
}

export default MonthlyBudget;