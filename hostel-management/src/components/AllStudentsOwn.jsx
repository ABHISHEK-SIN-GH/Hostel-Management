import React from 'react';
import { 
  MDBTable, 
  MDBTableHead, 
  MDBTableBody, 
  MDBBtn,
  MDBModal,
  MDBModalDialog,
  MDBModalContent,
  MDBModalHeader,
  MDBModalTitle,
  MDBModalBody,
  MDBModalFooter, 
  MDBInput
} from 'mdb-react-ui-kit';
import { useEffect, useState } from 'react';
import { allStudent,deleteStudent, getStudentByName } from '../services/studentApi.js';
import Moment from 'moment';
import { useNavigate } from "react-router-dom";
import AdminNavbarOwn from './AdminNavbarOwn';

export default function AllStudentsOwn() {

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
  
  const [basicModal, setBasicModal] = useState(false);

  const toggleShow = () => setBasicModal(!basicModal);

  const [basicModalX, setBasicModalX] = useState(false);

  const toggleShowX = () => setBasicModalX(!basicModalX);

  const [search, setSearch] = useState('');

  const [res, setRes] = useState(defaultStudent);

  const onValChange = (e) => {
    setSearch(e.target.value);
  }
  
  const searchFunc = async () => {
     const sdata = await getStudentByName(search);
     setRes(sdata.data);
     toggleShowX();
  }

  let navigate = useNavigate();

  useEffect(() => {
    students();
  },[]);

  const [state, setstate] = useState([]);

  const students = async () => {
    const AllStudents = await allStudent();
    const allStuds = AllStudents.data;
    setstate(allStuds);
    // console.log(state);
  }

  const deleteStudentDetails = async (id) => {
    await deleteStudent(id);
    students();
  }


  return (
   <div>
   <AdminNavbarOwn navL="student"/>
    <div className='mt-5 mb-3 bg-danger'>
        <h1 className='border border-3 border-dark text-dark d-inline px-5 py-3'>All Students</h1>
    </div>
    <div className='mt-5 mb-4' key={"uniq"}>
      <button className='btn btn-outline-primary btn-sm me-2' onClick={()=>{toggleShow()}}>Search Student</button>
      <MDBBtn outline color='success' size='sm' href='/addStudents'>
        Add New Student
      </MDBBtn>
    </div>
    <div className='w-100'>
      <MDBTable className='mb-3 container-fluid border' style={{fontSize:"12px"}}>
        <MDBTableHead dark>
            <tr>
            <th scope='col' style={{width:"20px"}}>#ID</th>
            <th scope='col' style={{width:"200px"}}>Name</th>
            <th scope='col' style={{width:"100px"}}>Mob. No.</th>
            <th scope='col' style={{width:"200px"}}>Address</th>
            <th scope='col' title='Date of Joining' style={{width:"40px"}}>DOJ</th>
            <th scope='col' style={{width:"100px"}}>Room</th>
            <th scope='col' style={{width:"20px"}}>Mess</th>
            <th scope='col' title='Date of Birth' style={{width:"40px"}}>DOB</th>
            <th scope='col' style={{width:"40px"}}>Deposit</th>
            <th scope='col' style={{width:"40px"}}>Payment</th>
            </tr>
        </MDBTableHead>
        <MDBTableBody>
          {
          state.map(st=>(
            <tr key={st._id}>
            <td style={{width:"20px"}}>{st._id}</td>
            <td style={{width:"200px"}}>{st.fname}</td>
            <td style={{width:"100px"}}>{st.mob}</td>
            <td style={{width:"200px"}}>{st.address}</td>
            <td style={{width:"40px"}}>{Moment(st.createdAt).format('D/M/Y')}</td>
            <td style={{width:"100px"}}>{st.room ? st.room : "Nil" }</td>
            <td style={{width:"20px"}}>{st.mess}</td>
            <td style={{width:"40px"}}>{Moment(st.dob).format('D/M/Y')}</td>
            <td style={{width:"40px"}}>{st.deposit ? st.deposit : 0}</td>
            <td style={{width:"40px"}}>{st.payment ? st.payment : 0}</td>
            </tr>
            ))
          }
        </MDBTableBody>
      </MDBTable>
    </div>
    <MDBModal show={basicModal} setShow={setBasicModal} tabIndex='-1'>
        <MDBModalDialog>
          <MDBModalContent>
            <MDBModalHeader>
              <MDBModalTitle>Search Student By Name</MDBModalTitle>
              <button className='btn-close' onClick={toggleShow}></button>
            </MDBModalHeader>
            <MDBModalBody>
              <MDBInput label='Enter Student Name' id='form1' type='text' onChange={(e)=>onValChange(e)}/>
            </MDBModalBody>
            <MDBModalFooter>
              <button className='btn btn-danger' onClick={toggleShow}>Close</button>
              <button className='btn btn-primary' onClick={searchFunc}>Search</button>
            </MDBModalFooter>
          </MDBModalContent>
        </MDBModalDialog>
    </MDBModal>
    <MDBModal show={basicModalX} setShow={setBasicModalX} tabIndex='-1'>
        <MDBModalDialog>
          <MDBModalContent>
            <MDBModalHeader className='bg-primary'>
              <MDBModalTitle className='text-white'>{res.fname}</MDBModalTitle>
              <button className='btn-close btn-light' onClick={toggleShowX}></button>
            </MDBModalHeader>
            <MDBModalBody>
              <div className='text-start'>
               <li><b>Student ID:</b> {res._id}</li>
               <li><b>Student Name:</b> {res.fname}</li>
               <li><b>Mother's Name:</b> {res.mrname}</li>
               <li><b>Father's Name:</b> {res.frname}</li>
               <li><b>Email ID:</b> {res.email}</li>
               <li><b>Mobile No.:</b> {res.mob}</li>
               <li><b>Address:</b> {res.address}</li>
               <li><b>DOB:</b> {Moment(res.dob).format("YYYY-MM-DD")}</li>
               <li><b>ID-Proof:</b> {res.idproof}</li>
               <li><b>ID-Proof-No.:</b> {res.idproofnum}</li>
               <li><b>Mess Requirement:</b> {res.mess}</li> 
              </div>
            </MDBModalBody>
          </MDBModalContent>
        </MDBModalDialog>
      </MDBModal>
   </div>
  );
}