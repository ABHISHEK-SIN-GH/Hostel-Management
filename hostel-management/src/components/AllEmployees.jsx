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
import { allEmployee, deleteEmployee, getEmployeeByName } from '../services/employeeApi'
import Moment from 'moment';


export default function AllEmployees() {

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

  const [basicModal, setBasicModal] = useState(false);

  const toggleShow = () => setBasicModal(!basicModal);

  const [basicModalX, setBasicModalX] = useState(false);

  const toggleShowX = () => setBasicModalX(!basicModalX);

  const [search, setSearch] = useState('');

  const [res, setRes] = useState(defaultEmployee);

  const onValChange = (e) => {
    setSearch(e.target.value);
  }
  
  const searchFunc = async () => {
     const sdata = await getEmployeeByName(search);
     setRes(sdata.data);
     toggleShowX();
  }

  useEffect(() => {
    employees();
  },[]);

  const [state, setstate] = useState([]);

  const employees = async () => {
    const AllEmployees = await allEmployee();
    const allEmps = AllEmployees.data;
    setstate(allEmps);
    // console.log(state);
  }

  const deleteEmployeeDetails = async (id) => {
    await deleteEmployee(id);
    employees();
  }

  return (
   <div>
     <div className='mt-5 mb-3 bg-danger'>
        <h1 className='border border-3 border-dark text-dark d-inline px-5 py-3'>All Employees</h1>
    </div>
    <div className='mt-5 mb-4'>
      <button className='btn btn-outline-primary btn-sm me-2' onClick={()=>{toggleShow()}}>Search Employee</button>
      <MDBBtn outline color='success' size='sm' href='/addEmployees'>
        Add New Employee
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
            <th scope='col' style={{width:"100px"}}>Role</th>
            <th scope='col' title='Date of Birth' style={{width:"40px"}}>DOB</th>
            <th scope='col' style={{width:"40px"}}>Salary</th>
            <th scope='col' style={{width:"100px"}}>Salary Status</th>
            <th scope='col' style={{width:"200px"}}>Actions</th>
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
            <td style={{width:"40px"}}>{Moment(st.doj).format('D/M/Y')}</td>
            <td style={{width:"100px"}}>{st.role}</td>
            <td style={{width:"40px"}}>{Moment(st.dob).format('D/M/Y')}</td>
            <td style={{width:"40px"}}>{st.salary ? st.salary : 0}</td>
            <td style={{width:"40px"}}>{st.salaryStatus ? st.salaryStatus : 0}</td>
            <td>
                <MDBBtn className='py-1' color='primary' size='sm' href={`/editEmployee/${st._id}`}>
                    <small>Edit</small>
                </MDBBtn>
                <MDBBtn className='py-1 mx-2' color='danger' size='sm' onClick={()=>{deleteEmployeeDetails(st._id)}}>
                    <small>Delete</small>
                </MDBBtn>
            </td>
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
              <MDBModalTitle>Search Employee By Name</MDBModalTitle>
              <button className='btn-close' onClick={toggleShow}></button>
            </MDBModalHeader>
            <MDBModalBody>
              <MDBInput label='Enter Employee Name' id='form1' type='text' onChange={(e)=>onValChange(e)}/>
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
               <li><b>Employee ID:</b> {res._id}</li>
               <li><b>Employee Name:</b> {res.fname}</li>
               <li><b>Mother's Name:</b> {res.mrname}</li>
               <li><b>Father's Name:</b> {res.frname}</li>
               <li><b>Email ID:</b> {res.email}</li>
               <li><b>Mobile No.:</b> {res.mob}</li>
               <li><b>Address:</b> {res.address}</li>
               <li><b>DOB:</b> {Moment(res.dob).format("YYYY-MM-DD")}</li>
               <li><b>ID-Proof:</b> {res.idproof}</li>
               <li><b>ID-Proof-No.:</b> {res.idproofnum}</li>
               <li><b>Role:</b> {res.role}</li> 
              </div>
            </MDBModalBody>
          </MDBModalContent>
        </MDBModalDialog>
      </MDBModal>
   </div>
  );
}