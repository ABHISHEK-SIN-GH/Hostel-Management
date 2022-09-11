import React from 'react';
import { useState,useEffect} from "react";
import { useNavigate,useParams } from "react-router-dom";
import { getVisitor,editVisitor } from "../services/visitorApi.js";
import Moment from 'moment';
import {
  MDBInput
} from 'mdb-react-ui-kit';

export default function EditVisitor() {

  let navigate = useNavigate();

  const {id} = useParams();

  const defaultVisitor = {
    vname: '',
    stname: '',
    vmob: 0,
    relation: '',
    visitTimeIN: '',
    visitTimeOut: '',
    visitDate: ''
  }

  const [visitor, setVisitor] = useState(defaultVisitor);

  useEffect(()=>{
    loadVisitor();
  },[])

  const loadVisitor = async () => {
    const res = await getVisitor(id);
    const visitorData = res.data;
    setVisitor(visitorData);
  }

  const onValueChange = (e) => {
    setVisitor({...visitor,[e.target.name]:e.target.value});
  }

  const editVisitorNew = async (e) => {
      await editVisitor(visitor,id);
      navigate("/visitors");
  }

  return (
    <div>
        <div className='mt-5 mb-5 bg-primary container rounded-pill'>
          <h1 className='border border-3 border-dark text-dark d-inline px-5 py-3'>Edit Visitor</h1>
        </div>
        <form className="container">
          <MDBInput className="mb-4" id='vname' name='vname' label='Visitor Name' type="text" value={visitor.vname} onChange={(e)=>onValueChange(e)}/>
          <MDBInput className="mb-4" id='stname' name='stname' label="Student Name" type='text'value={visitor.stname} onChange={(e)=>onValueChange(e)}/>
          <MDBInput className="mb-4" id='vmob' name='vmob' label="Visitor Mobile Number" type='number' value={visitor.vmob} onChange={(e)=>onValueChange(e)}/>
          <MDBInput className="mb-4" id='relation' name='relation' label='Relation with Student' type='text' value={visitor.relation} onChange={(e)=>onValueChange(e)}/>
          <div className='row mx-0 mb-4'>
            <MDBInput wrapperClass="px-0 col-md-9 col-9" id='visitTimeIN' name='visitTimeIN' label='Visit In Time' type='text' disabled/>
            <input className="form-control w-25" id='visitTimeIN' name='visitTimeIN' type='time' value={visitor.visitTimeIN} onChange={(e)=>onValueChange(e)}/>
          </div>
          <div className='row mx-0 mb-4'>
            <MDBInput wrapperClass="px-0 col-md-9 col-9" id='visitTimeOut' name='visitTimeOut' label='Visit Out Time' type='text' disabled/>
            <input className="form-control w-25" id='visitTimeOut' name='visitTimeOut' type='time' value={visitor.visitTimeOut} onChange={(e)=>onValueChange(e)}/>
          </div>
          <MDBInput className="mb-4" id='visitDate' name="visitDate" label='Date of Visit' type='date' value={Moment(visitor.visitDate).format("YYYY-MM-DD")} onChange={(e)=>onValueChange(e)}/>
          <button className='mb-4 d-block w-100 btn btn-primary' type="button" onClick={editVisitorNew}>Update Details</button>
        </form>
    </div>
  )
}
