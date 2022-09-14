import React from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  MDBInput,
  MDBRadio,
  MDBBtn
} from 'mdb-react-ui-kit';
import { loginAdmin, loginEmployee, loginOwner, loginStudent } from '../services/loginApi';

export default function LoginPage() {

  const defaultUser = {
    user:"student",
    userEmail:"",
    userPassword:""
  }

  const [user, setUser] = useState(defaultUser);

  const onValChange = (e) => {
    setUser({...user,[e.target.name]:e.target.value});
  }

  const navigate = useNavigate();

  const login = async () => {

    if (user.user=="owner") {
      const ownLog = await loginOwner(user);
      if (ownLog.data==null) {
        alert("No user Found!!");
      }else{
        // console.log(ownLog.data);
        navigate('/ownerPage');
      }
    } 
    
    else if (user.user=="employee") {
      const empLog = await loginEmployee(user);
      if (empLog.data==null) {
        alert("No user Found!!");
      }else{
        // console.log(empLog.data);
        navigate('/employePage');
      }
    } 
    
    else if (user.user=="admin") {
      const adLog = await loginAdmin(user);
      if (adLog.data==null) {
        alert("No user Found!!");
      }else{
        // console.log(adLog.data);
        navigate('/students');
      }
    } 
    
    else {
      const studLog = await loginStudent(user);
      if (studLog.data==null) {
        alert("No user Found!!");
      }else{
        // console.log(studLog.data);
        navigate('/studentPage');
      }
    }

  }

  return (
    <div>
        <div id='intro-example' className='p-5 text-center bg-image' style={{ backgroundImage: "url('https://pixahive.com/wp-content/uploads/2021/01/Hostel-276324-pixahive.jpg')",height:"100vh" }}>
          <div className='mask' style={{ backgroundColor: 'rgba(0, 0, 0, 0.5)' }}>
            <div className='d-flex justify-content-center align-items-center h-100'>
              <div className='text-white'>
              <h1 className='mt-5 fw-bold' style={{fontFamily:"Bradley Hand, cursive"}}>Hostel-Management</h1>
              <p className='my-3' style={{fontFamily:"Bradley Hand, cursive"}}>Please login to continue</p>
              <form className='container py-3 my-3 border border-2 px-3 rounded rounded-3' style={{maxWidth:"600px",backgroundColor: 'rgba(0, 0, 0, 0.7)'}} autoComplete="off">
              <MDBInput className='mb-3 bg-light' name='userEmail' type='email' id='form1Example1' onChange={(e)=>onValChange(e)} label='Email address' autoComplete="off"/>
              <MDBInput className='mb-3 bg-light' name='userPassword' type='password' id='form1Example2' onChange={(e)=>onValChange(e)} label='Password' autoComplete="off"/>

              <div className='row mb-3 text-start'>
                  <div className='col-md-3 col-6'>
                  <MDBRadio name='user' id='flexRadioDefault1' value="student" label='As Student' onChange={(e)=>onValChange(e)} defaultChecked/>
                  </div>
                  <div className='col-md-3 col-6'>
                  <MDBRadio name='user' id='flexRadioDefault2' value="employee" label='As Employee' onChange={(e)=>onValChange(e)}/>
                  </div>
                  <div className='col-md-3 col-6'>
                  <MDBRadio name='user' id='flexRadioDefault3' value="admin" label='As Admin' onChange={(e)=>onValChange(e)}/>
                  </div>
                  <div className='col-md-3 col-6'>
                  <MDBRadio name='user' id='flexRadioDefault4' value="owner" label='As Owner' onChange={(e)=>onValChange(e)}/>
                  </div>
              </div>

              <button type='button' className='d-block w-100 mb-3 btn btn-primary' onClick={login}>
                Sign in
              </button>

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
