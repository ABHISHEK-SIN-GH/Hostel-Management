import React from 'react';
import { useState } from 'react';
import Moment from 'moment';
import { getStudent } from '../services/studentApi';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { 
  MDBTable, 
  MDBTableHead, 
  MDBTableBody,
  MDBContainer,
  MDBNavbar,
  MDBNavbarBrand,
  MDBIcon,
  MDBFooter,
  MDBBtn } from 'mdb-react-ui-kit';

export default function StudentProfile(props) {

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

  const searchFunc = async () => {
    const sdata = await getStudent(id);
    setStudent(sdata.data);
 }

 useEffect(() => {
   searchFunc();
 },[]);

  return (
    <div>
      <MDBNavbar light bgColor='light' className="py-3 border-bottom border-dark border-2">
        <MDBContainer fluid>
          <MDBNavbarBrand href='#'>
            <MDBIcon fas icon="hotel" />
            <b className="mx-2">Hostel-Management <span className="text-danger">(Student)</span></b>
          </MDBNavbarBrand>
        </MDBContainer>
      </MDBNavbar>
      <h3 className='my-3 py-2'>{student.fname?student.fname:"Student"}'s Profile</h3>
      <div className='col-12 col-md-5 mx-auto badge-danger'>
      <MDBTable bordered small className='container border-black text-black' style={{fontSize:"11px"}}>
      <MDBTableHead className='text-start'>
        <tr>
          <th scope='col'>#</th>
          <th scope='col'>Details</th>
        </tr>
      </MDBTableHead>
      <MDBTableBody className='text-start'>
        <tr>
          <th scope='row'>Student ID</th>
          <td>{student._id}</td>
        </tr>
        <tr>
          <th scope='row'>Student Name</th>
          <td>{student.fname}</td>
        </tr>
        <tr>
          <th scope='row'>Mother's Name</th>
          <td>{student.mrname}</td>
        </tr>
        <tr>
          <th scope='row'>Father's Name</th>
          <td>{student.frname}</td>
        </tr>
        <tr>
          <th scope='row'>Email ID</th>
          <td>{student.email}</td>
        </tr>
        <tr>
          <th scope='row'>Mobile No.</th>
          <td>{student.mob}</td>
        </tr>
        <tr>
          <th scope='row'>Address</th>
          <td>{student.address}</td>
        </tr>
        <tr>
          <th scope='row'>DOB</th>
          <td>{Moment(student.dob).format("YYYY-MM-DD")}</td>
        </tr>
        <tr>
          <th scope='row'>ID-Proof</th>
          <td>{student.idproof}</td>
        </tr>
        <tr>
          <th scope='row'>ID-Proof-No.</th>
          <td>{student.idproofnum}</td>
        </tr>
        <tr>
          <th scope='row'>Mess</th>
          <td>{student.mess}</td>
        </tr>
      </MDBTableBody>
      </MDBTable>
      </div>
    </div>
  )
}

