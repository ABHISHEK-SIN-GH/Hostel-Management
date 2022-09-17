import React from 'react';
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { 
  MDBTable, 
  MDBTableHead, 
  MDBTableBody,
  MDBContainer,
  MDBNavbar,
  MDBNavbarBrand,
  MDBIcon,
  MDBFooter,
  MDBInput,
  MDBTextArea,
  MDBBtn } from 'mdb-react-ui-kit';
import { addFeedback } from "../services/feedbackApi.js"

export default function FeedbackForm() {

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
      alert("Form submitted succefully!");
  }
  
  return (
    <div>
      <MDBNavbar light bgColor='light' className="py-3 border-bottom border-dark border-2">
        <MDBContainer fluid>
          <MDBNavbarBrand href='#'>
            <MDBIcon fas icon="hotel" />
            <b className="mx-2">Hostel-Management <span className="text-danger"></span></b>
          </MDBNavbarBrand>
        </MDBContainer>
      </MDBNavbar>
      <h3 className='my-4 py-3'>Feedback Form</h3>
      <form className="container">
          <MDBInput className="mb-4" id='name' name='name' label='Name' type="text" onChange={(e)=>onValueChange(e)}/>
          <MDBInput className="mb-4" id='subject' name='subject' label='Subject' type="text" onChange={(e)=>onValueChange(e)}/>
          <MDBTextArea className="mb-4" id='description' name='description' label='Description' type="text" onChange={(e)=>onValueChange(e)}/>
          <button className='mb-4 d-block w-100 btn btn-success' type="button" onClick={addFeedbackNew}>Submit Feedback</button>
      </form>
      
      <MDBFooter className='bg-dark text-center text-white mt-5 position-fixed bottom-0 w-100'>

      <MDBContainer className='p-4 pb-0'>
        <section className='mb-4'>
          <MDBBtn outline color="light" floating className='m-1' href='#!' role='button'>
            <MDBIcon fab icon='facebook-f' />
          </MDBBtn>

          <MDBBtn outline color="light" floating className='m-1' href='#!' role='button'>
            <MDBIcon fab icon='twitter' />
          </MDBBtn>

          <MDBBtn outline color="light" floating className='m-1' href='#!' role='button'>
            <MDBIcon fab icon='google' />
          </MDBBtn>
          <MDBBtn outline color="light" floating className='m-1' href='#!' role='button'>
            <MDBIcon fab icon='instagram' />
          </MDBBtn>

          <MDBBtn outline color="light" floating className='m-1' href='#!' role='button'>
            <MDBIcon fab icon='linkedin-in' />
          </MDBBtn>

          <MDBBtn outline color="light" floating className='m-1' href='#!' role='button'>
            <MDBIcon fab icon='github' />
          </MDBBtn>
        </section>
      </MDBContainer>

      <div className='text-center p-3' style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
        © 2020 Copyright:
        <a className='text-white' href='https://mdbootstrap.com/'>
          MDBootstrap.com
        </a>
      </div>
      </MDBFooter>
    </div>
  )
}


