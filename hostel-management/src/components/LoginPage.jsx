import React from 'react';
import { useNavigate } from 'react-router-dom';
import {
  MDBInput,
  MDBRadio,
  MDBBtn
} from 'mdb-react-ui-kit';
import AdminNavbar from "../components/AdminNavbar";

export default function LoginPage() {

  const navigate = useNavigate();

  const login = () => {
    navigate("/students");
  }

  return (
    <div>
        <div id='intro-example' className='p-5 text-center bg-image' style={{ backgroundImage: "url('https://pixahive.com/wp-content/uploads/2021/01/Hostel-276324-pixahive.jpg')",height:"100vh" }}>
          <div className='mask' style={{ backgroundColor: 'rgba(0, 0, 0, 0.5)' }}>
            <div className='d-flex justify-content-center align-items-center h-100'>
              <div className='text-white'>
              <h1 className='mt-5 fw-bold' style={{fontFamily:"Bradley Hand, cursive"}}>Hostel-Management</h1>
              <p className='my-3' style={{fontFamily:"Bradley Hand, cursive"}}>Please login to continue</p>
              <form className='container py-3 my-3 border border-2 px-3 rounded rounded-3' style={{maxWidth:"600px",backgroundColor: 'rgba(0, 0, 0, 0.7)'}}>
              <MDBInput className='mb-3 bg-light' type='email' id='form1Example1' label='Email address' autoComplete='false' autoFocus="false"/>
              <MDBInput className='mb-3 bg-light' type='password' id='form1Example2' label='Password' autoComplete='false' autoFocus="false"/>

              <div className='row mb-3 text-start'>
                  <div className='col-md-3 col-6'>
                  <MDBRadio name='flexRadioDefault' id='flexRadioDefault1' label='As Student' defaultChecked/>
                  </div>
                  <div className='col-md-3 col-6'>
                  <MDBRadio name='flexRadioDefault' id='flexRadioDefault2' label='As Employee'/>
                  </div>
                  <div className='col-md-3 col-6'>
                  <MDBRadio name='flexRadioDefault' id='flexRadioDefault3' label='As Admin'/>
                  </div>
                  <div className='col-md-3 col-6'>
                  <MDBRadio name='flexRadioDefault' id='flexRadioDefault3' label='As Owner'/>
                  </div>
              </div>

              <MDBBtn type='button' className='mb-3' block onClick={login}>
                Sign in
              </MDBBtn>

              <div className='text-center'>
                <p>
                  Not a member? <a href='#!'>Register</a>
                </p>
              </div>

              </form>
              <div className='my-4 border border-2 px-5 py-2 rounded rounded-pill mx-auto' style={{maxWidth:"600px", backgroundColor: 'rgba(0, 0, 0, 0.2)'}} >
                <h1 className='text-align' style={{fontFamily:"Bradley Hand, cursive"}}>Contact Us</h1>
                <p className='text-start'>
                <small>Shop no. 107, Bhagwan Das Complex Choura Rasta, Jaipur, Rajasthan 302003</small><br/>
                <small><b>Email:</b> Support@management.com</small><br/>
                <small><b>Customer care No.:</b> +91-89492-70689</small><br/>
                </p>
              </div>
              </div>
            </div>
          </div>
        </div>
    </div>
  )
}
