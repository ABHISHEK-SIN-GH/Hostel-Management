import React from 'react'
import { useState,useEffect} from "react";
import { useNavigate,useParams } from "react-router-dom";
import { getFee,editFee } from '../services/feesApi.js'
import {
  MDBInput,
  MDBRadio
} from 'mdb-react-ui-kit';
import Moment from 'moment';
import AdminNavbar from "../components/AdminNavbar";

export default function EditFee() {

  let navigate = useNavigate();

  const {id} = useParams();

  const defaultFees = {
    studentName: "",
    dueDate: "",
    dueAmount: 0,
    deposit: 0,
    rent: 0,
    paymentMode: "",
    paymentDate: ""
  }

  const [fee, setFee] = useState(defaultFees);

  useEffect(()=>{
    loadFee();
  },[])

  const loadFee = async () => {
    const res = await getFee(id);
    const feeData = res.data;
    setFee(feeData);
  }

  const onValueChange = (e) => {
    setFee({...fee,[e.target.name]:e.target.value});
  }

  const editFeeNew = async (e) => {
    await editFee(fee,id);
    navigate("/fees");
  }

  return (
    <div>
        <AdminNavbar navL="fees"/>
        <div className='mt-5 mb-5 bg-primary container rounded-pill'>
          <h1 className='border border-3 border-dark text-dark d-inline px-5 py-3'>Edit Fees Entry</h1>
        </div>
        <form className="container">
        <MDBInput className="mb-4" id='studentName' name='studentName' label='Student Name' value={fee.studentName} type="text" onChange={(e)=>onValueChange(e)}/>
        <MDBInput className="mb-4" id='dueDate' name='dueDate' label="Due Date" type='date' value={Moment(fee.dueDate).format("YYYY-MM-DD")} onChange={(e)=>onValueChange(e)}/>
        <MDBInput className="mb-4" id='dueAmount' name='dueAmount' label="Due Amount" type='number' value={fee.dueAmount} onChange={(e)=>onValueChange(e)}/>
        <MDBInput className="mb-4" id='deposit' name='deposit' label='Deposited Amount' type='number' value={fee.deposit} onChange={(e)=>onValueChange(e)}/>
        <MDBInput className="mb-4" id='rent' name='rent' label='Rent of the Room' type='number' value={fee.rent} onChange={(e)=>onValueChange(e)}/>
        <div className="mb-4 text-start row mx-0 px-0">
          <MDBInput wrapperClass='col-12 col-md-9 px-0' id='paymentMode'  label='Mode of Payment' type='text' disabled/>
          <div className="col-12 col-md-3 mt-3 my-md-auto">
            {fee.paymentMode=="online"?<MDBRadio name='paymentMode' id='online' value='online' label='Online' inline onChange={(e)=>onValueChange(e)} checked/>:<MDBRadio name='paymentMode' id='online' value='online' label='Online' inline onChange={(e)=>onValueChange(e)}/>}
            {fee.paymentMode=="offline"?<MDBRadio name='paymentMode' id='offline' value='offline' label='Offline' inline onChange={(e)=>onValueChange(e)} checked/>:<MDBRadio name='paymentMode' id='offline' value='offline' label='Offline' inline onChange={(e)=>onValueChange(e)}/>}
          </div>
        </div>
        <MDBInput className="mb-4" id='paymentDate' name='paymentDate' label='Date of Payment' type='date' value={Moment(fee.paymentDate).format("YYYY-MM-DD")} onChange={(e)=>onValueChange(e)}/>
        <button className='mb-4 d-block w-100 btn btn-primary' type="button" onClick={editFeeNew}>Update Fees</button>
        </form>
    </div>
  )
}
