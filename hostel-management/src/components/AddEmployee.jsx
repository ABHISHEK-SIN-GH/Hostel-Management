import React from 'react'
import { addEmployee } from '../services/employeeApi'
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  MDBInput,
  MDBRadio
} from 'mdb-react-ui-kit';

export default function AddEmployee() {

  let navigate = useNavigate();

  const defaultEmployee = {
    fname:'',
    mrname:'',
    frname:'',
    email:'',
    mob:'',
    address:'',
    dob:'',
    idproof:'',
    idproofnum:'',
    role:'',
    salary:'',
    doj:'',
    dol:'',
  }

  const [employee, setEmployee] = useState(defaultEmployee);

  const onValueChange = (e) => {
    setEmployee({...employee,[e.target.name]:e.target.value})
  }

  const addEmployeeNew = async (e) => {
    await addEmployee(employee);
    navigate("/employees");
  }

  return (
    <div>
        <div className='mt-5 mb-5 bg-success container rounded-pill'>
          <h1 className='border border-3 border-dark text-dark d-inline px-5 py-3'>ADD New Employees</h1>
        </div>
        <form className="container">
        <MDBInput className="mb-4" id='fname' name='fname' label='Full Name' type="text" onChange={(e)=>onValueChange(e)}/>
        <MDBInput className="mb-4" id='mrname' name='mrname' label="Mother's Name" type='text' onChange={(e)=>onValueChange(e)}/>
        <MDBInput className="mb-4" id='frname' name='frname' label="Father's Name" type='text' onChange={(e)=>onValueChange(e)}/>
        <MDBInput className="mb-4" id='email' name='email' label='Email address' type='email' onChange={(e)=>onValueChange(e)}/>
        <MDBInput className="mb-4" id='mob' name='mob' label='Mobile Number' type='number' onChange={(e)=>onValueChange(e)}/>
        <MDBInput className="mb-4" id='address' name='address' label='Address' type='text' onChange={(e)=>onValueChange(e)}/>
        <MDBInput className="mb-4" id='dob' name='dob' label='Date of Birth' type='date' onChange={(e)=>onValueChange(e)}/>
        <div className="mb-4 text-start row mx-0 px-0">
          <MDBInput wrapperClass='col-12 col-md-6 px-0' id='idproof' label='Identity Proof ( Document Name )' type='text' disabled/>
          <div className="col-12 col-md-6 mt-3 my-md-auto">
            <MDBRadio name='idproof' id='ac' value='ac' label='Aadhar Card' inline onChange={(e)=>onValueChange(e)}/>
            <MDBRadio name='idproof' id='dl' value='dl' label='Driving License' inline onChange={(e)=>onValueChange(e)}/>
            <MDBRadio name='idproof' id='vi' value='vi' label='Voter ID' inline onChange={(e)=>onValueChange(e)}/>
            <MDBRadio name='idproof' id='pp' value='pp' label='Passport' inline onChange={(e)=>onValueChange(e)}/>
          </div>
        </div>
        <MDBInput className='mb-4' name="idproofnum" id='idproofnum' label='Identity Proof ( Document Number )' type='text' onChange={(e)=>onValueChange(e)}/>
        <div className="mb-4 text-start row mx-0 px-0">
          <MDBInput wrapperClass='col-12 col-md-6 px-0' id='role' label='Role ( Designation )' type='text' disabled/>
          <div className="col-12 col-md-6 mt-3 my-md-auto">
            <MDBRadio name='role' id='staff' value='staff' label='Staff' inline onChange={(e)=>onValueChange(e)}/>
            <MDBRadio name='role' id='cook' value='cook' label='Cook' inline onChange={(e)=>onValueChange(e)}/>
            <MDBRadio name='role' id='security' value='security' label='Security' inline onChange={(e)=>onValueChange(e)}/>
            <MDBRadio name='role' id='cleaner' value='cleaner' label='Cleaner' inline onChange={(e)=>onValueChange(e)}/>
            <MDBRadio name='role' id='helper' value='helper' label='Helper' inline onChange={(e)=>onValueChange(e)}/>
          </div>
        </div>
        <MDBInput className='mb-4' name="salary" id='salary' label='Salary ( Per Month )' type='number' onChange={(e)=>onValueChange(e)}/>
        <MDBInput className='mb-4' name="doj" id='doj' label='Date of Joining' type='date' onChange={(e)=>onValueChange(e)}/>
        <MDBInput className='mb-4' name="dol" id='dol' label='Date of Leaving' type='date' onChange={(e)=>onValueChange(e)}/>
        <button className='mb-4 d-block w-100 btn btn-success' type="button" onClick={addEmployeeNew}>Register Now</button>
      </form>
    </div>
  )
}
