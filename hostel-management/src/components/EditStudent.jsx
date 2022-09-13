import React from "react";
import Moment from 'moment';
import { editStudent,getStudent }  from '../services/studentApi.js'
import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import {
  MDBInput,
  MDBRadio
} from 'mdb-react-ui-kit';
import AdminNavbar from "../components/AdminNavbar";

export default function EditStudent() {

  const navigate = useNavigate();

  const {id} = useParams();

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

  useEffect(()=>{
    loadStudent();
  },[])

  const loadStudent = async () => {
    const res = await getStudent(id);
    const studentData = res.data;
    setStudent(studentData);
  }
  
  const onValueChange = (e) => {
    setStudent({...student,[e.target.name]:e.target.value})
  }

  const editStudentDetails = async (e) => {
    await editStudent(student,id);
    navigate("/students");
  }

  return (
    <div>
      <AdminNavbar navL="student"/>
      <div className='mt-5 mb-5 bg-primary container rounded-pill'>
          <h1 className='border border-3 border-dark text-dark d-inline px-5 py-3'>Edit Student</h1>
      </div>
      <form className="container">
      <MDBInput className="mb-4" id='fname' name='fname' label='Full Name' type="text" value={student.fname} onChange={(e)=>onValueChange(e)} />
      <MDBInput className="mb-4" id='mrname' name='mrname' label="Mother's Name" type='text' value={student.mrname} onChange={(e)=>onValueChange(e)}/>
      <MDBInput className="mb-4" id='frname' name='frname' label="Father's Name" type='text' value={student.frname} onChange={(e)=>onValueChange(e)}/>
      <MDBInput className="mb-4" id='email' name='email' label='Email address' type='email' value={student.email} onChange={(e)=>onValueChange(e)}/>
      <MDBInput className="mb-4" id='mob' name='mob' label='Mobile Number' type='number' value={student.mob} onChange={(e)=>onValueChange(e)}/>
      <MDBInput className="mb-4" id='address' name='address' label='Address' type='text' value={student.address} onChange={(e)=>onValueChange(e)}/>
      <MDBInput className="mb-4" id='dob' name='dob' label='Date of Birth' type='date' value={Moment(student.dob).format('YYYY-MM-DD')} onChange={(e)=>onValueChange(e)}/>
      <div className="mb-4 text-start row mx-0 px-0">
        <MDBInput wrapperClass='col-12 col-md-6 px-0' id='idproof' label='Identity Proof ( Document Name )' type='text' disabled/>
        <div className="col-12 col-md-6 mt-3 my-md-auto">
          {student.idproof=="ac"? <MDBRadio name='idproof' id='ac' value='ac' label='Aadhar Card' inline onChange={(e)=>onValueChange(e)} checked/> : <MDBRadio name='idproof' id='ac' value='ac' label='Aadhar Card' inline onChange={(e)=>onValueChange(e)}/>}
          {student.idproof=="dl"? <MDBRadio name='idproof' id='dl' value='dl' label='Driving License' inline onChange={(e)=>onValueChange(e)} checked/> : <MDBRadio name='idproof' id='dl' value='dl' label='Driving License' inline onChange={(e)=>onValueChange(e)}/>}
          {student.idproof=="vi"? <MDBRadio name='idproof' id='vi' value='vi' label='Voter ID' inline onChange={(e)=>onValueChange(e)} checked/> : <MDBRadio name='idproof' id='vi' value='vi' label='Voter ID' inline onChange={(e)=>onValueChange(e)}/>}
          {student.idproof=="pp"? <MDBRadio name='idproof' id='pp' value='pp' label='Passport' inline onChange={(e)=>onValueChange(e)} checked/> : <MDBRadio name='idproof' id='pp' value='pp' label='Passport' inline onChange={(e)=>onValueChange(e)}/>}
        </div>
      </div>
      <MDBInput className='mb-4' name="idproofnum" id='idproofnum' label='Identity Proof ( Document Number )' value={student.idproofnum} type='text' onChange={(e)=>onValueChange(e)}/>
      <div className="mb-4 text-start row mx-0 px-0">
        <MDBInput wrapperClass='col-12 col-md-6 px-0' id='messReq' label='Mess Required ?' type='text' disabled/>
        <div className="col-6 mt-3 my-md-auto">
          {student.mess=="yes"?<MDBRadio name='mess' id='messY' value='yes' label='Yes' inline onChange={(e)=>onValueChange(e)} checked/>:<MDBRadio name='mess' id='messY' value='yes' label='Yes' inline onChange={(e)=>onValueChange(e)}/>}
          {student.mess=="no"?<MDBRadio name='mess' id='messN' value='no' label='No' inline onChange={(e)=>onValueChange(e)} checked/>:<MDBRadio name='mess' id='messN' value='no' label='No' inline onChange={(e)=>onValueChange(e)}/>}
        </div>
      </div>
      <button className='mb-4 d-block w-100 btn btn-primary' type="button" onClick={editStudentDetails}>Update Now</button>
    </form>
    </div>
  );
}
