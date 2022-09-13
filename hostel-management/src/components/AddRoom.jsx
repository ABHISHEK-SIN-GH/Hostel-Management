import React from 'react'
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  MDBInput,
  MDBRadio
} from 'mdb-react-ui-kit';
import { addRoom }  from '../services/roomApi.js'
import AdminNavbar from "../components/AdminNavbar";

export default function AddRoom() {

let navigate = useNavigate();

const defaultroom = {
  roomNo : 0,
  numOfBeds : 0,
  bedsVacant : 0,
  rent:0,
  studentNames : "",
  studentIds: "",
  status: 0,
}

const [room, setRoom] = useState(defaultroom);

const onValueChange = (e) => {
  setRoom({...room,[e.target.name]:e.target.value})
}

const addRoomNew = async (e) => {
  await addRoom(room);
  navigate("/rooms");
}

  return (
    <div>
        <AdminNavbar navL="room"/>
        <div className='mt-5 mb-5 bg-success container rounded-pill'>
          <h1 className='border border-3 border-dark text-dark d-inline px-5 py-3'>ADD New Room</h1>
        </div>
        <form className="container">
        <MDBInput className="mb-4" id='roomNo' name='roomNo' label='Room Number' type="number" onChange={(e)=>onValueChange(e)}/>
        <MDBInput className="mb-4" id='numOfBeds' name='numOfBeds' label="Number of Beds" type='number' onChange={(e)=>onValueChange(e)}/>
        <MDBInput className="mb-4" id='bedsVacant' name='bedsVacant' label="Number of Vacant Beds" type='number' onChange={(e)=>onValueChange(e)}/>
        <MDBInput className="mb-4" id='rent' name='rent' label='Rent for the Room ( Per Head )' type='number' onChange={(e)=>onValueChange(e)}/>
        <MDBInput className="mb-4" id='studentNames' name='studentNames' label='Student Names ( Write ( , ) Comma Separated Value )' type='text' onChange={(e)=>onValueChange(e)}/>
        <MDBInput className="mb-4" id='studentIds' name='studentIds' label='Student IDs ( Write ( , ) Comma Separated Value )' type='text' onChange={(e)=>onValueChange(e)}/>
        <div className="mb-4 text-start row mx-0 px-0">
          <MDBInput wrapperClass='col-12 col-md-9 px-0' id='roomStatus' label='Room Availability Status' type='text' disabled/>
          <div className="col-12 col-md-3 mt-3 my-md-auto">
            <MDBRadio name='status' id='availalbe' value='availalbe' label='Availalbe' inline onChange={(e)=>onValueChange(e)}/>
            <MDBRadio name='status' id='occupied' value='occupied' label='Occupied' inline onChange={(e)=>onValueChange(e)}/>
          </div>
        </div>
        <button className='mb-4 d-block w-100 btn btn-success' type="button" onClick={addRoomNew}>Save Room</button>
      </form>
    </div>
  )
}
