import React from 'react';
import { useState } from 'react';
import Moment from 'moment';
import { getEmployee } from '../services/employeeApi';
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

export default function EmployeePayment() {

  const {id} = useParams();

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

  const searchFunc = async () => {
    const sdata = await getEmployee(id);
    setEmployee(sdata.data);
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
            <b className="mx-2">Hostel-Management <span className="text-primary">(Employee)</span></b>
          </MDBNavbarBrand>
        </MDBContainer>
      </MDBNavbar>
      <h3 className='my-3 py-2'>{employee.fname?employee.fname:"Employee"}'s Payment Details</h3>
      <div className='col-12 col-md-5 mx-auto badge-primary'>
      <h1 className='p-5'>Payment Info</h1>
      </div>
    </div>
  )
}
