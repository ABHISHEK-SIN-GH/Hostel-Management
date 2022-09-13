import React from 'react'
import { editFeedback,getFeedback }  from '../services/feedbackApi.js'
import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import {
  MDBInput,
  MDBTextArea
} from 'mdb-react-ui-kit';
import AdminNavbar from "../components/AdminNavbar";

export default function EditFeedback() {

  let navigate = useNavigate();

  const {id} = useParams();

  const defaultFeedback = {
    subject: "",
    description: ""
  }

  const [feedback, setFeedback] = useState(defaultFeedback);

  useEffect(()=>{
    loadFeedback();
  },[])

  const loadFeedback = async () => {
    const res = await getFeedback(id);
    const feedbackData = res.data;
    setFeedback(feedbackData);
  }

  const onValueChange = (e) => {
    setFeedback({...feedback,[e.target.name]:e.target.value});
  }

  const editFeedbackNew = async (e) => {
      await editFeedback(feedback,id);
      navigate("/feedbacks");
  }

  return (
    <div>
        <AdminNavbar navL="feedback"/>
        <div className='mt-5 mb-5 bg-primary container rounded-pill'>
          <h1 className='border border-3 border-dark text-dark d-inline px-5 py-3'>Edit Feedback</h1>
        </div>
        <form className="container">
          <MDBInput className="mb-4" id='name' name='name' label='Name' type="text" value={feedback.name} onChange={(e)=>onValueChange(e)}/>
          <MDBInput className="mb-4" id='subject' name='subject' label='Subject' type="text" value={feedback.subject} onChange={(e)=>onValueChange(e)}/>
          <MDBTextArea className="mb-4" id='description' name='description' label='Description' value={feedback.description} type="text" onChange={(e)=>onValueChange(e)}/>
          <button className='mb-4 d-block w-100 btn btn-primary' type="button" onClick={editFeedbackNew}>Update Feedback</button>
        </form>
    </div>
  )
}
