import axios from 'axios';

const url = 'http://localhost:8000/fees';

export const addFees = async (data) => {
    try{
       return await axios.post(`${url}/addFees`,data)
    }catch(e){
        console.log("Error:",e);
    }
}

export const allFees = async () => {
    try{
       return await axios.get(`${url}/allFees`)
    }catch(e){
        console.log("Error:",e);
    }
}

export const getFee = async (id) => {
    try{
       return await axios.get(`${url}/${id}`)
    }catch(e){
        console.log("Error:",e);
    }
}

export const editFee = async (fee, id) => {
    try{
       return await axios.post(`${url}/${id}`, fee)
    }catch(e){
        console.log("Error:",e);
    }
}

export const deleteFee = async (id) => {
    try{
       return await axios.delete(`${url}/${id}`)
    }catch(e){
        console.log("Error:",e);
    }
}