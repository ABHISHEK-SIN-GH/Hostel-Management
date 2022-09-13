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
import { allRooms,deleteRoom, getRoomByNumber } from '../services/roomApi'
import Moment from 'moment';
import AdminNavbar from "../components/AdminNavbar";

export default function AllRooms() {

  const defaultroom = {
    roomNo : 0,
    numOfBeds : 0,
    bedsVacant : 0,
    rent:0,
    studentNames : "",
    studentIds: "",
    status: 0,
  }

  const [basicModal, setBasicModal] = useState(false);

  const toggleShow = () => setBasicModal(!basicModal);

  const [basicModalX, setBasicModalX] = useState(false);

  const toggleShowX = () => setBasicModalX(!basicModalX);

  const [search, setSearch] = useState('');

  const [res, setRes] = useState(defaultroom);

  const onValChange = (e) => {
    setSearch(e.target.value);
  }
  
  const searchFunc = async () => {
     const sdata = await getRoomByNumber(search);
     setRes(sdata.data);
     toggleShowX();
    //  console.log(sdata.data);
  }

  useEffect(() => {
    rooms();
  },[]);

  const [state, setstate] = useState([]);

  const rooms = async () => {
    const AllRooms = await allRooms();
    const allRms = AllRooms.data;
    setstate(allRms);
    // console.log(allRms);
  }

  const deleteRoomDetails = async (id) => {
    await deleteRoom(id);
    rooms();
  }

  return (
   <div>
     <AdminNavbar navL="room"/>
     <div className='mt-5 mb-3 bg-danger'>
        <h1 className='border border-3 border-dark text-dark d-inline px-5 py-3'>All Rooms</h1>
    </div>
    <div className='mt-5 mb-4'>
      <button className='btn btn-outline-primary btn-sm me-2' onClick={()=>{toggleShow()}}>Search Room</button>
      <MDBBtn outline color='success' size='sm' href='/addRooms'>
        Add New Room
      </MDBBtn>
    </div>
    <div className='w-100'>
      <MDBTable className='mb-3 container-fluid border' style={{fontSize:"12px"}}>
        <MDBTableHead dark>
            <tr>
            <th scope='col' style={{width:"20px"}}>#ID</th>
            <th scope='col' style={{width:"100px"}}>Room No.</th>
            <th scope='col' style={{width:"100px"}}>Total Beds</th>
            <th scope='col' style={{width:"100px"}}>Vacant Beds</th>
            <th scope='col' style={{width:"100px"}}>Rent</th>
            <th scope='col' style={{width:"180px"}}>Students</th>
            <th scope='col' style={{width:"100px"}}>StudentIds</th>
            <th scope='col' style={{width:"100px"}}>Status</th>
            <th scope='col' style={{width:"200px"}}>Actions</th>
            </tr>
        </MDBTableHead>
        <MDBTableBody>
          {
          state.map(st=>(
            <tr key={st._id}>
            <td style={{width:"20px"}}>{st._id}</td>
            <td style={{width:"100px"}}>{st.roomNo}</td>
            <td style={{width:"100px"}}>{st.numOfBeds}</td>
            <td style={{width:"100px"}}>{st.bedsVacant}</td>
            <td style={{width:"100px"}}>{st.rent}</td>
            <td style={{width:"180px"}}>{st.studentNames?st.studentNames:"Nil"}</td>
            <td style={{width:"100px"}}>{st.studentIds?st.studentIds:"Nil"}</td>
            <td style={{width:"100px"}}>{st.status}</td>
            <td>
                <MDBBtn className='py-1' color='primary' size='sm' href={`/editRoom/${st._id}`}>
                    <small>Edit</small>
                </MDBBtn>
                <MDBBtn className='py-1 mx-2' color='danger' size='sm' onClick={()=>{deleteRoomDetails(st._id)}}>
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
              <MDBModalTitle>Search Room By Number</MDBModalTitle>
              <button className='btn-close' onClick={toggleShow}></button>
            </MDBModalHeader>
            <MDBModalBody>
              <MDBInput label='Enter Room No.' id='form1' type='text' onChange={(e)=>onValChange(e)}/>
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
              <MDBModalTitle className='text-white'>Room No. {res.roomNo}</MDBModalTitle>
              <button className='btn-close btn-light' onClick={toggleShowX}></button>
            </MDBModalHeader>
            <MDBModalBody>
              <div className='text-start'>
              <li><b>Room ID:</b> {res._id}</li>
              <li><b>Room Number:</b> {res.roomNo}</li>
              <li><b>Number of Beds:</b> {res.numOfBeds}</li>
              <li><b>Vacant Beds:</b> {res.bedsVacant}</li>
              <li><b>Rent of Room:</b> {res.rent}</li>
              <li><b>Student Names:</b> {res.studentNames?res.studentNames:"Nil"}</li>
              <li><b>Student IDs:</b> {res.studentIds?res.studentIds:"Nil"}</li>
              <li><b>Room Status:</b> {res.status}</li>
              </div>
            </MDBModalBody>
          </MDBModalContent>
        </MDBModalDialog>
      </MDBModal>
   </div>
  );
}