import React from 'react'
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  MDBInput,
  MDBTextArea
} from 'mdb-react-ui-kit';
import { addFeedback } from "../services/feedbackApi.js"

export default function Feedbacks() {

  let navigate = useNavigate();

  const defaultFeedback = {
    name:"",
    subject: "",
    description: ""
  }

  const [feedback, setFeedback] = useState(defaultFeedback);

  const onValueChange = (e) => {
    setFeedback({...feedback,[e.target.name]:e.target.value});
  }

  const addFeedbackNew = async (e) => {
      await addFeedback(feedback);
      navigate("/feedbacks");
  }

  return (
    <div>
        <div className='mt-5 mb-5 bg-success container rounded-pill'>
          <h1 className='border border-3 border-dark text-dark d-inline px-5 py-3'>ADD New Feedback</h1>
        </div>
        <form className="container">
          <MDBInput className="mb-4" id='name' name='name' label='Name' type="text" onChange={(e)=>onValueChange(e)}/>
          <MDBInput className="mb-4" id='subject' name='subject' label='Subject' type="text" onChange={(e)=>onValueChange(e)}/>
          <MDBTextArea className="mb-4" id='description' name='description' label='Description' type="text" onChange={(e)=>onValueChange(e)}/>
          <button className='mb-4 d-block w-100 btn btn-success' type="button" onClick={addFeedbackNew}>Submit Feedback</button>
        </form>
    </div>
  )
}
