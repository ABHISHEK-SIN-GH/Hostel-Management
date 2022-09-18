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

export default function EmployeeProfile() {

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
      <h3 className='my-3 py-2'>{employee.fname?employee.fname:"Employee"}'s Profile</h3>
      <div className='col-12 col-md-5 mx-auto badge-primary'>
      <MDBTable bordered small className='container border-black text-black' style={{fontSize:"11px"}}>
      <MDBTableHead className='text-start'>
        <tr>
          <th scope='col'>#</th>
          <th scope='col'>Details</th>
        </tr>
      </MDBTableHead>
      <MDBTableBody className='text-start'>
        <tr>
          <th scope='row'>Employee ID</th>
          <td>{employee._id}</td>
        </tr>
        <tr>
          <th scope='row'>Employee Name</th>
          <td>{employee.fname}</td>
        </tr>
        <tr>
          <th scope='row'>Mother's Name</th>
          <td>{employee.mrname}</td>
        </tr>
        <tr>
          <th scope='row'>Father's Name</th>
          <td>{employee.frname}</td>
        </tr>
        <tr>
          <th scope='row'>Email ID</th>
          <td>{employee.email}</td>
        </tr>
        <tr>
          <th scope='row'>Mobile No.</th>
          <td>{employee.mob}</td>
        </tr>
        <tr>
          <th scope='row'>Address</th>
          <td>{employee.address}</td>
        </tr>
        <tr>
          <th scope='row'>DOB</th>
          <td>{Moment(employee.dob).format("YYYY-MM-DD")}</td>
        </tr>
        <tr>
          <th scope='row'>ID-Proof</th>
          <td>{employee.idproof}</td>
        </tr>
        <tr>
          <th scope='row'>ID-Proof-No.</th>
          <td>{employee.idproofnum}</td>
        </tr>
        <tr>
          <th scope='row'>Role</th>
          <td>{employee.role}</td>
        </tr>
      </MDBTableBody>
      </MDBTable>
      </div>
    </div>
  )
}
