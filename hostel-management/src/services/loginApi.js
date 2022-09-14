import axios from 'axios';
const url = 'http://localhost:8000/login';

export const loginStudent = async (data) => {
    try{
       return await axios.post(`${url}/student`,data);
    }catch(e){
        console.log("Error:",e);
    }
}

export const loginEmployee = async (data) => {
    try{
       return await axios.post(`${url}/employee`,data);
    }catch(e){
        console.log("Error:",e);
    }
}

export const loginAdmin = async (data) => {
    try{
       return await axios.post(`${url}/admin`,data);
    }catch(e){
        console.log("Error:",e);
    }
}

export const loginOwner = async (data) => {
    try{
       return await axios.post(`${url}/owner`,data);
    }catch(e){
        console.log("Error:",e);
    }
}