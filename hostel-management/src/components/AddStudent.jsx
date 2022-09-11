import React from "react";
import { addStudent }  from '../services/studentApi.js'
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  MDBInput,
  MDBRadio
} from 'mdb-react-ui-kit';

export default function AddStudent() {

  let navigate = useNavigate();

  const defaultStudent = {
    fname:'',
    mrname:'',
    frname:'',
    email:'',
    mob:'',
    address:'',
    dob:'',
    idproof:'',
    idproofnum:'',
    mess:'',
  }

  const [student, setStudent] = useState(defaultStudent);

  const onValueChange = (e) => {
    setStudent({...student,[e.target.name]:e.target.value})
  }

  const addStudentNew = async (e) => {
    await addStudent(student);
    navigate("/students");
  }

  return (
    <div>
      <div className='mt-5 mb-5 bg-success container rounded-pill'>
          <h1 className='border border-3 border-dark text-dark d-inline px-5 py-3'>ADD New Student</h1>
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
        <MDBInput wrapperClass='col-12 col-md-6 px-0' id='messReq' label='Mess Required ?' type='text' disabled/>
        <div className="col-6 mt-3 my-md-auto">
          <MDBRadio name='mess' id='messY' value='yes' label='Yes' inline onChange={(e)=>onValueChange(e)}/>
          <MDBRadio name='mess' id='messN' value='no' label='No' inline onChange={(e)=>onValueChange(e)}/>
        </div>
      </div>
      <button className='mb-4 d-block w-100 btn btn-success' type="button" onClick={addStudentNew}>Register Now</button>
    </form>
    </div>
  );
}
