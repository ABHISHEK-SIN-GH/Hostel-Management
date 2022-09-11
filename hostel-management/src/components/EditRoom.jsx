import React from 'react'
import { useState,useEffect} from "react";
import { useNavigate,useParams } from "react-router-dom";
import { editRoom,getRoom }  from '../services/roomApi.js'
import {
  MDBInput,
  MDBRadio
} from 'mdb-react-ui-kit';

export default function EditRoom() {

let navigate = useNavigate();

const {id} = useParams();

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

useEffect(()=>{
  loadRoom();
},[])

const loadRoom = async () => {
  const res = await getRoom(id);
  const roomData = res.data;
  setRoom(roomData);
}

const onValueChange = (e) => {
  setRoom({...room,[e.target.name]:e.target.value})
}

const editRoomNew = async (e) => {
  await editRoom(room,id);
  navigate("/rooms");
}

  return (
    <div>
        <div className='mt-5 mb-5 bg-primary container rounded-pill'>
          <h1 className='border border-3 border-dark text-dark d-inline px-5 py-3'>Edit Room</h1>
        </div>
        <form className="container">
        <MDBInput className="mb-4" id='roomNo' name='roomNo' label='Room Number' type="number" value={room.roomNo} onChange={(e)=>onValueChange(e)}/>
        <MDBInput className="mb-4" id='numOfBeds' name='numOfBeds' label="Number of Beds" type='number' value={room.numOfBeds} onChange={(e)=>onValueChange(e)}/>
        <MDBInput className="mb-4" id='bedsVacant' name='bedsVacant' label="Number of Vacant Beds" type='number' value={room.bedsVacant} onChange={(e)=>onValueChange(e)}/>
        <MDBInput className="mb-4" id='rent' name='rent' label='Rent for the Room ( Per Head )' type='number' value={room.rent} onChange={(e)=>onValueChange(e)}/>
        <MDBInput className="mb-4" id='studentNames' name='studentNames' label='Student Names ( Write ( , ) Comma Separated Value )' value={room.studentNames} type='text' onChange={(e)=>onValueChange(e)}/>
        <MDBInput className="mb-4" id='studentIds' name='studentIds' label='Student IDs ( Write ( , ) Comma Separated Value )' value={room.studentIds} type='text' onChange={(e)=>onValueChange(e)}/>
        <div className="mb-4 text-start row mx-0 px-0">
          <MDBInput wrapperClass='col-12 col-md-9 px-0' id='roomStatus' label='Room Availability Status' type='text' disabled/>
          <div className="col-12 col-md-3 mt-3 my-md-auto">
            {room.status=="availalbe"?<MDBRadio name='status' id='availalbe' value='availalbe' label='Availalbe' inline onChange={(e)=>onValueChange(e)} checked/>:<MDBRadio name='status' id='availalbe' value='availalbe' label='Availalbe' inline onChange={(e)=>onValueChange(e)}/>}
            {room.status=="occupied"?<MDBRadio name='status' id='occupied' value='occupied' label='Occupied' inline onChange={(e)=>onValueChange(e)} checked/>:<MDBRadio name='status' id='occupied' value='occupied' label='Occupied' inline onChange={(e)=>onValueChange(e)}/>}
          </div>
        </div>
        <button className='mb-4 d-block w-100 btn btn-primary' type="button" onClick={editRoomNew}>Update Room</button>
      </form>
    </div>
  )
}
