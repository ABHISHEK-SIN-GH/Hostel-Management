import React from 'react'
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  MDBInput
} from 'mdb-react-ui-kit';
import { addVisitor } from "../services/visitorApi.js"

export default function AddVisitor() {

  let navigate = useNavigate();

  const defaultVisitor = {
    vname: '',
    stname: '',
    vmob: 0,
    relation: '',
    visitTimeIN: '',
    visitTimeOut: '',
    visitDate: ''
  }

  const [visitor, setVisitor] = useState(defaultVisitor);

  const onValueChange = (e) => {
    setVisitor({...visitor,[e.target.name]:e.target.value});
  }

  const addVisitorNew = async (e) => {
      await addVisitor(visitor);
      navigate("/visitors");
  }

  return (
    <div>
        <div className='mt-5 mb-5 bg-success container rounded-pill'>
          <h1 className='border border-3 border-dark text-dark d-inline px-5 py-3'>ADD New Visitor</h1>
        </div>
        <form className="container">
          <MDBInput className="mb-4" id='vname' name='vname' label='Visitor Name' type="text" onChange={(e)=>onValueChange(e)}/>
          <MDBInput className="mb-4" id='stname' name='stname' label="Student Name" type='text' onChange={(e)=>onValueChange(e)}/>
          <MDBInput className="mb-4" id='vmob' name='vmob' label="Visitor Mobile Number" type='number' onChange={(e)=>onValueChange(e)}/>
          <MDBInput className="mb-4" id='relation' name='relation' label='Relation with Student' type='text' onChange={(e)=>onValueChange(e)}/>
          <div className='row mx-0 mb-4'>
            <MDBInput wrapperClass="px-0 col-md-9 col-9" id='visitTimeIN' name='visitTimeIN' label='Visit In Time' type='text' disabled/>
            <input className="form-control w-25" id='visitTimeIN' name='visitTimeIN' type='time' onChange={(e)=>onValueChange(e)}/>
          </div>
          <div className='row mx-0 mb-4'>
            <MDBInput wrapperClass="px-0 col-md-9 col-9" id='visitTimeOut' name='visitTimeOut' label='Visit Out Time' type='text' disabled/>
            <input className="form-control w-25" id='visitTimeOut' name='visitTimeOut' type='time' onChange={(e)=>onValueChange(e)}/>
          </div>
          <MDBInput className="mb-4" id='visitDate' name="visitDate" label='Date of Visit' type='date' onChange={(e)=>onValueChange(e)}/>
          <button className='mb-4 d-block w-100 btn btn-success' type="button" onClick={addVisitorNew}>Save Details</button>
        </form>
    </div>
  )
}
