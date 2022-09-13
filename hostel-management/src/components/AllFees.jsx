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
import { allFees,deleteFee, getFee } from '../services/feesApi';
import Moment from 'moment';
import AdminNavbar from "../components/AdminNavbar";


export default function AllFees() {

  const defaultFees = {
    studentName: "",
    dueDate: "",
    dueAmount: 0,
    deposit: 0,
    rent: 0,
    paymentMode: "",
    paymentDate: ""
  }

  const [basicModal, setBasicModal] = useState(false);

  const toggleShow = () => setBasicModal(!basicModal);

  const [basicModalX, setBasicModalX] = useState(false);

  const toggleShowX = () => setBasicModalX(!basicModalX);

  const [search, setSearch] = useState('');

  const [res, setRes] = useState(defaultFees);

  const onValChange = (e) => {
    setSearch(e.target.value);
  }
  
  const searchFunc = async () => {
     const sdata = await getFee(search);
     setRes(sdata.data);
     toggleShowX();
     console.log(sdata.data);
  }

  useEffect(() => {
    fees();
  },[]);

  const [state, setstate] = useState([]);

  const fees = async () => {
    const AllFee = await allFees();
    const allFee = AllFee.data;
    setstate(allFee);
    // console.log(state);
  }

  const deleteFeeDetails = async (id) => {
    await deleteFee(id);
    fees();
  }

  return (
   <div>
    <AdminNavbar navL="fees"/>
     <div className='mt-5 mb-3 bg-danger'>
        <h1 className='border border-3 border-dark text-dark d-inline px-5 py-3'>All Fees Entry</h1>
    </div>
    <div className='mt-5 mb-4'>
      <button className='btn btn-outline-primary btn-sm me-2' onClick={()=>{toggleShow()}}>Search Fee Entry</button>
      <MDBBtn outline color='success' size='sm' href='/addFees'>
        Add New Entry
      </MDBBtn>
    </div>
    <div className='w-100'>
      <MDBTable className='mb-3 container-fluid border' style={{fontSize:"12px"}}>
        <MDBTableHead dark>
            <tr>
            <th scope='col' style={{width:"20px"}}>#ID</th>
            <th scope='col' style={{width:"200px"}}>Student</th>
            <th scope='col' style={{width:"100px"}}>Due Date</th>
            <th scope='col' style={{width:"200px"}}>Due Amount</th>
            <th scope='col' style={{width:"40px"}}>Deposit</th>
            <th scope='col' style={{width:"100px"}}>Rent</th>
            <th scope='col' style={{width:"20px"}}>Payment Mode</th>
            <th scope='col' style={{width:"40px"}}>Payment Date</th>
            <th scope='col' style={{width:"200px"}}>Actions</th>
            </tr>
        </MDBTableHead>
        <MDBTableBody>
          {
          state.map(st=>(
            <tr key={st._id}>
            <td style={{width:"20px"}}>{st._id}</td>
            <td style={{width:"200px"}}>{st.studentName}</td>
            <td style={{width:"40px"}}>{Moment(st.dueDate).format('YYYY-MM-DD')}</td>
            <td style={{width:"100px"}}>{st.dueAmount}</td>
            <td style={{width:"20px"}}>{st.deposit}</td>
            <td style={{width:"40px"}}>{st.rent}</td>
            <td style={{width:"40px"}}>{st.paymentMode}</td>
            <td style={{width:"40px"}}>{Moment(st.paymentDate).format('YYYY-MM-DD')}</td>
            <td>
                <MDBBtn className='py-1' color='primary' size='sm' href={`/editFee/${st._id}`}>
                    <small>Edit</small>
                </MDBBtn>
                <MDBBtn className='py-1 mx-2' color='danger' size='sm' onClick={()=>{deleteFeeDetails(st._id)}}>
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
              <MDBModalTitle>Search Fee Entry By ID</MDBModalTitle>
              <button className='btn-close' onClick={toggleShow}></button>
            </MDBModalHeader>
            <MDBModalBody>
              <MDBInput label='Enter Fee Entry ID' id='form1' type='text' onChange={(e)=>onValChange(e)}/>
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
              <MDBModalTitle className='text-white'>{res.studentName}' Fees ({Moment(res.paymentDate).format('YYYY-MM-DD')})</MDBModalTitle>
              <button className='btn-close btn-light' onClick={toggleShowX}></button>
            </MDBModalHeader>
            <MDBModalBody>
              <div className='text-start'>
              <li><b>FEE ID:</b> {res._id}</li>
              <li><b>Student Name:</b> {res.studentName}</li>
              <li><b>Due Date:</b> {Moment(res.dueDate).format('YYYY-MM-DD')}</li>
              <li><b>Due Amount:</b> {res.dueAmount}</li>
              <li><b>Deposit Amount:</b> {res.deposit}</li>
              <li><b>Room Rent:</b> {res.rent}</li>
              <li><b>Payment Mode:</b> {res.paymentMode}</li>
              <li><b>Payment Date:</b> {Moment(res.paymentDate).format('YYYY-MM-DD')}</li>
              </div>
            </MDBModalBody>
          </MDBModalContent>
        </MDBModalDialog>
      </MDBModal>
   </div>
  );
}