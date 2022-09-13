import React from 'react'
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  MDBInput,
  MDBRadio
} from 'mdb-react-ui-kit';
import { addFees } from '../services/feesApi.js'
import AdminNavbar from "../components/AdminNavbar";

export default function Fees() {

  let navigate = useNavigate();

  const defaultFees = {
    studentName: "",
    dueDate: "",
    dueAmount: 0,
    deposit: 0,
    rent: 0,
    paymentMode: "",
    paymentDate: ""
  }

  const [fee, setFee] = useState(defaultFees);

  const onValueChange = (e) => {
    setFee({...fee,[e.target.name]:e.target.value});
  }

  const addFeeNew = async (e) => {
    await addFees(fee);
    navigate("/fees");
  }

  return (
    <div>
        <AdminNavbar navL="fees"/>
        <div className='mt-5 mb-5 bg-success container rounded-pill'>
          <h1 className='border border-3 border-dark text-dark d-inline px-5 py-3'>ADD Fees Entry</h1>
        </div>
        <form className="container">
        <MDBInput className="mb-4" id='studentName' name='studentName' label='Student Name' type="text" onChange={(e)=>onValueChange(e)}/>
        <MDBInput className="mb-4" id='dueDate' name='dueDate' label="Due Date" type='date' onChange={(e)=>onValueChange(e)}/>
        <MDBInput className="mb-4" id='dueAmount' name='dueAmount' label="Due Amount" type='number' onChange={(e)=>onValueChange(e)}/>
        <MDBInput className="mb-4" id='deposit' name='deposit' label='Deposited Amount' type='number' onChange={(e)=>onValueChange(e)}/>
        <MDBInput className="mb-4" id='rent' name='rent' label='Rent of the Room' type='number' onChange={(e)=>onValueChange(e)}/>
        <div className="mb-4 text-start row mx-0 px-0">
          <MDBInput wrapperClass='col-12 col-md-9 px-0' id='paymentMode'  label='Mode of Payment' type='text' disabled/>
          <div className="col-12 col-md-3 mt-3 my-md-auto">
            <MDBRadio name='paymentMode' id='online' value='online' label='Online' inline onChange={(e)=>onValueChange(e)}/>
            <MDBRadio name='paymentMode' id='offline' value='offline' label='Offline' inline onChange={(e)=>onValueChange(e)}/>
          </div>
        </div>
        <MDBInput className="mb-4" id='paymentDate' name='paymentDate' label='Date of Payment' type='date' onChange={(e)=>onValueChange(e)}/>
        <button className='mb-4 d-block w-100 btn btn-success' type="button" onClick={addFeeNew}>Submit Fees</button>
        </form>
    </div>
  )
}
