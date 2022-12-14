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
import { allFeedback, deleteFeedback, getFeedbackBySubject } from '../services/feedbackApi.js';
import Moment from 'moment';
import AdminNavbarOwn from './AdminNavbarOwn';


export default function AllFeedbacksOwn() {

  const defaultFeedback = {
    name:"",
    subject: "",
    description: ""
  }

  const [basicModal, setBasicModal] = useState(false);

  const toggleShow = () => setBasicModal(!basicModal);

  const [basicModalX, setBasicModalX] = useState(false);

  const toggleShowX = () => setBasicModalX(!basicModalX);

  const [search, setSearch] = useState('');

  const [res, setRes] = useState(defaultFeedback);

  const onValChange = (e) => {
    setSearch(e.target.value);
  }
  
  const searchFunc = async () => {
     const sdata = await getFeedbackBySubject(search);
     setRes(sdata.data);
     toggleShowX();
    //  console.log(sdata.data);
  }

  useEffect(() => {
    feedbacks();
  },[]);

  const [state, setstate] = useState([]);

  const feedbacks = async () => {
    const AllFeedbacks = await allFeedback();
    const allFeeds = AllFeedbacks.data;
    setstate(allFeeds);
    // console.log(state);
  }

  const deleteFeedbackDetails = async (id) => {
    await deleteFeedback(id);
    feedbacks();
  }

  return (
   <div>
     <AdminNavbarOwn navL="feedback"/>
     <div className='mt-5 mb-3 bg-danger'>
        <h1 className='border border-3 border-dark text-dark d-inline px-5 py-3'>All Feedbacks</h1>
    </div>
    <div className='mt-5 mb-4'>
      <button className='btn btn-outline-primary btn-sm me-2' onClick={()=>{toggleShow()}}>Search Feedback</button>
      <MDBBtn outline color='success' size='sm' href='/addFeedbacks'>
        Add New Feedback
      </MDBBtn>
    </div>
    <div className='w-100'>
      <MDBTable className='mb-3 container-fluid border' style={{fontSize:"12px"}}>
        <MDBTableHead dark>
            <tr>
            <th scope='col' style={{width:"20px"}}>#ID</th>
            <th scope='col' style={{width:"200px"}}>Name</th>
            <th scope='col' style={{width:"200px"}}>Subject</th>
            <th scope='col' style={{width:"400px"}}>Description</th>
            <th scope='col' style={{width:"100px"}}>Date</th>
            </tr>
        </MDBTableHead>
        <MDBTableBody>
          {
          state.map(st=>(
            <tr key={st._id}>
            <td style={{width:"20px"}}>{st._id}</td>
            <td style={{width:"200px"}}>{st.name}</td>
            <td style={{width:"200px"}}>{st.subject}</td>
            <td style={{width:"400px"}}>{st.description}</td>
            <td style={{width:"100px"}}>{Moment(st.createdAt).format('d/M/y')}</td>
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
              <MDBModalTitle>Search Feedback By Subject</MDBModalTitle>
              <button className='btn-close' onClick={toggleShow}></button>
            </MDBModalHeader>
            <MDBModalBody>
              <MDBInput label='Enter Subject Name' id='form1' type='text' onChange={(e)=>onValChange(e)}/>
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
              <MDBModalTitle className='text-white'>{res.name}'s Feedback</MDBModalTitle>
              <button className='btn-close btn-light' onClick={toggleShowX}></button>
            </MDBModalHeader>
            <MDBModalBody>
              <div className='text-start'>
              <li>{res._id}</li>
              <li>{res.name}</li>
              <li>{res.subject}</li>
              <li>{res.description}</li>
              </div>
            </MDBModalBody>
          </MDBModalContent>
        </MDBModalDialog>
      </MDBModal>
   </div>
  );
}