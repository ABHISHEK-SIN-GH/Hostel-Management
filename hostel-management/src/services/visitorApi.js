import axios from 'axios';

const url = 'http://localhost:8000/visitor';

export const addVisitor = async (data) => {
    try{
       return await axios.post(`${url}/addVisitor`,data)
    }catch(e){
        console.log("Error:",e);
    }
}

export const allVisitor = async () => {
    try{
       return await axios.get(`${url}/allVisitor`)
    }catch(e){
        console.log("Error:",e);
    }
}

export const getVisitor = async (id) => {
    try{
       return await axios.get(`${url}/${id}`)
    }catch(e){
        console.log("Error:",e);
    }
}

export const getVisitorByName = async (search) => {
    try{
       return await axios.get(`${url}/name/${search}`)
    }catch(e){
        console.log("Error:",e);
    }
}

export const editVisitor = async (visitor, id) => {
    try{
       return await axios.post(`${url}/${id}`, visitor)
    }catch(e){
        console.log("Error:",e);
    }
}

export const deleteVisitor = async (id) => {
    try{
       return await axios.delete(`${url}/${id}`)
    }catch(e){
        console.log("Error:",e);
    }
}