import axios from 'axios';

const url = 'http://localhost:8000/employee';

export const addEmployee = async (data) => {
    try{
       return await axios.post(`${url}/addEmployee`,data)
    }catch(e){
        console.log("Error:",e);
    }
}

export const allEmployee = async () => {
    try{
       return await axios.get(`${url}/allEmployee`)
    }catch(e){
        console.log("Error:",e);
    }
}

export const getEmployee = async (id) => {
    try{
       return await axios.get(`${url}/${id}`)
    }catch(e){
        console.log("Error:",e);
    }
}

export const getEmployeeByName = async (search) => {
    try{
       return await axios.get(`${url}/name/${search}`)
    }catch(e){
        console.log("Error:",e);
    }
}

export const editEmployee = async (employee, id) => {
    try{
       return await axios.post(`${url}/${id}`, employee)
    }catch(e){
        console.log("Error:",e);
    }
}

export const deleteEmployee = async (id) => {
    try{
       return await axios.delete(`${url}/${id}`)
    }catch(e){
        console.log("Error:",e);
    }
}