import React from 'react';
import { 
  MDBTable, 
  MDBTableHead, 
  MDBTableBody, 
  MDBBtn,
  MDBModal,
  MDBModalDialog,
  MDBModalContent,
  MDBModalHeader,
  MDBModalTitle,
  MDBModalBody,
  MDBModalFooter, 
  MDBInput
} from 'mdb-react-ui-kit';
import { useEffect, useState } from 'react';
import { allVisitor,deleteVisitor, getVisitorByName } from '../services/visitorApi';
import Moment from 'moment';


export default function AllVisitors() {

  const defaultVisitor = {
    vname: '',
    stname: '',
    vmob: 0,
    relation: '',
    visitTimeIN: '',
    visitTimeOut: '',
    visitDate: ''
  }

  const [basicModal, setBasicModal] = useState(false);

  const toggleShow = () => setBasicModal(!basicModal);

  const [basicModalX, setBasicModalX] = useState(false);

  const toggleShowX = () => setBasicModalX(!basicModalX);

  const [search, setSearch] = useState('');

  const [res, setRes] = useState(defaultVisitor);

  const onValChange = (e) => {
    setSearch(e.target.value);
  }
  
  const searchFunc = async () => {
     const sdata = await getVisitorByName(search);
     setRes(sdata.data);
     toggleShowX();
     console.log(sdata.data);
  }

  useEffect(() => {
    visitors();
  },[]);

  const [state, setstate] = useState([]);

  const visitors = async () => {
    const AllVisitors = await allVisitor();
    const allVisits = AllVisitors.data;
    setstate(allVisits);
    // console.log(state);
  }

  const deleteVisitorDetails = async (id) => {
    await deleteVisitor(id);
    visitors();
  }

  return (
   <div>
     <div className='mt-5 mb-3 bg-danger'>
        <h1 className='border border-3 border-dark text-dark d-inline px-5 py-3'>All Visitors</h1>
    </div>
    <div className='mt-5 mb-4'>
      <button className='btn btn-outline-primary btn-sm me-2' onClick={()=>{toggleShow()}}>Search Visitor</button>
      <MDBBtn outline color='success' size='sm' href='/addVisitors'>
        Add New Visitor
      </MDBBtn>
    </div>
    <div className='w-100'>
      <MDBTable className='mb-3 container-fluid border' style={{fontSize:"12px"}}>
        <MDBTableHead dark>
            <tr>
            <th scope='col' style={{width:"20px"}}>#ID</th>
            <th scope='col' style={{width:"200px"}}>Visitor Name</th>
            <th scope='col' style={{width:"200px"}}>Student Name</th>
            <th scope='col' style={{width:"200px"}}>Vis. Mob. No.</th>
            <th scope='col' style={{width:"100px"}}>Relation</th>
            <th scope='col' style={{width:"100px"}}>In Time</th>
            <th scope='col' style={{width:"100px"}}>Out Time</th>
            <th scope='col' style={{width:"100px"}}>Visit Date</th>
            <th scope='col' style={{width:"200px"}}>Actions</th>
            </tr>
        </MDBTableHead>
        <MDBTableBody>
          {
          state.map(st=>(
            <tr key={st._id}>
            <td style={{width:"20px"}}>{st._id}</td>
            <td style={{width:"200px"}}>{st.vname}</td>
            <td style={{width:"200px"}}>{st.stname}</td>
            <td style={{width:"100px"}}>{st.vmob}</td>
            <td style={{width:"100px"}}>{st.relation}</td>
            <td style={{width:"40px"}}>{st.visitTimeIN}</td>
            <td style={{width:"100px"}}>{st.visitTimeOut}</td>
            <td style={{width:"100px"}}>{Moment(st.visitDate).format("D/M/Y")}</td>
            <td>
                <MDBBtn className='py-1' color='primary' size='sm' href={`/editVisitor/${st._id}`}>
                    <small>Edit</small>
                </MDBBtn>
                <MDBBtn className='py-1 mx-2' color='danger' size='sm' onClick={()=>deleteVisitorDetails(st._id)}>
                    <small>Delete</small>
                </MDBBtn>
            </td>
            </tr>
            ))
          }
        </MDBTableBody>
      </MDBTable>
    </div>
    <MDBModal show={basicModal} setShow={setBasicModal} tabIndex='-1'>
        <MDBModalDialog>
          <MDBModalContent>
            <MDBModalHeader>
              <MDBModalTitle>Search Visitor By Name</MDBModalTitle>
              <button className='btn-close' onClick={toggleShow}></button>
            </MDBModalHeader>
            <MDBModalBody>
              <MDBInput label='Enter Visitor Name' id='form1' type='text' onChange={(e)=>onValChange(e)}/>
            </MDBModalBody>
            <MDBModalFooter>
              <button className='btn btn-danger' onClick={toggleShow}>Close</button>
              <button className='btn btn-primary' onClick={searchFunc}>Search</button>
            </MDBModalFooter>
          </MDBModalContent>
        </MDBModalDialog>
    </MDBModal>
    <MDBModal show={basicModalX} setShow={setBasicModalX} tabIndex='-1'>
        <MDBModalDialog>
          <MDBModalContent>
            <MDBModalHeader className='bg-primary'>
              <MDBModalTitle className='text-white'>{res.vname}</MDBModalTitle>
              <button className='btn-close btn-light' onClick={toggleShowX}></button>
            </MDBModalHeader>
            <MDBModalBody>
              <div className='text-start'>
              <li><b>Visitor ID: </b>{res._id}</li>
              <li><b>Visitor Name: </b>{res.vname}</li>
              <li><b>Student Name: </b>{res.stname}</li>
              <li><b>Visitor Mob. No.: </b>{res.vmob}</li>
              <li><b>Relation: </b>{res.relation}</li>
              <li><b>Visitor IN Time: </b>{res.visitTimeIN}</li>
              <li><b>Visitor OUT Time: </b>{res.visitTimeOut}</li>
              <li><b>Visitor Date: </b>{Moment(res.visitDate).format("D/M/Y")}</li>
              </div>
            </MDBModalBody>
          </MDBModalContent>
        </MDBModalDialog>
      </MDBModal>
   </div>
  );
}