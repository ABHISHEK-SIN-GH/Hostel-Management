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

export default function StudentPayment() {

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
      <h3 className='my-3 py-2'>{student.fname?student.fname:"Student"}'s Payment Details</h3>
      <div className='col-12 col-md-5 mx-auto badge-danger'>
        <h1 className='p-5'>Payment Info</h1>
      </div>
    </div>
  )
}
