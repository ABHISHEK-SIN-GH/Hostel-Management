import React from "react";
import {
  MDBContainer,
  MDBNavbar,
  MDBNavbarBrand,
  MDBIcon,
  MDBFooter,
  MDBBtn
} from 'mdb-react-ui-kit';

export default function StudentPage() {
  return (
    <div>
      <MDBNavbar light bgColor='light' className="py-3 border-bottom border-dark border-2">
        <MDBContainer fluid>
          <MDBNavbarBrand href='#'>
            <MDBIcon fas icon="hotel" />
            <b className="mx-2">Hostel-Management <span className="text-danger">(Student Portal)</span></b>
          </MDBNavbarBrand>
        </MDBContainer>
      </MDBNavbar>
      <div>
        <div className="my-4 pt-3 row mx-auto d-flex justify-content-center align-items-center">
          <a href="/studentProfile" className="col-9 text-light col-md-4 p-4 p-md-5 bg-dark m-2 rounded"><h1 className="text-start fw-light"><MDBIcon fas icon="user-alt" className="me-3"/>Profile</h1></a>
          <a href="/feedbackForm" className="col-9 text-light col-md-4 p-4 p-md-5 bg-dark m-2 rounded"><h1 className="text-start fw-light"><MDBIcon fas icon="envelope-open" className="me-3"/>Feedback</h1></a>
          <a href="/studentPayment" className="col-9 text-light col-md-4 p-4 p-md-5 bg-dark m-2 rounded"><h1 className="text-start fw-light"><MDBIcon far icon="credit-card" className="me-3"/>Payment</h1></a>
          <a href="/" className="col-9 text-light col-md-4 p-4 p-md-5 bg-dark m-2 rounded"><h1 className="text-start fw-light"><MDBIcon fas icon="sign-out-alt" className="me-3"/>Logout</h1></a>
        </div>
      </div>
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
  );
}
