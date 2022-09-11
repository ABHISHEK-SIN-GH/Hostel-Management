import axios from 'axios';

const url = 'http://localhost:8000/student';

export const addStudent = async (data) => {
    try{
       return await axios.post(`${url}/addStudent`,data)
    }catch(e){
        console.log("Error:",e);
    }
}

export const allStudent = async () => {
    try{
       return await axios.get(`${url}/allStudent`)
    }catch(e){
        console.log("Error:",e);
    }
}

export const getStudent = async (id) => {
    try{
       return await axios.get(`${url}/${id}`)
    }catch(e){
        console.log("Error:",e);
    }
}

export const getStudentByName = async (search) => {
    try{
       return await axios.get(`${url}/name/${search}`)
    }catch(e){
        console.log("Error:",e);
    }
}

export const editStudent = async (student, id) => {
    try{
       return await axios.put(`${url}/${id}`, student)
    }catch(e){
        console.log("Error:",e);
    }
}

export const deleteStudent = async (id) => {
    try{
       return await axios.delete(`${url}/${id}`)
    }catch(e){
        console.log("Error:",e);
    }
}