import axios from 'axios';

const url = 'http://localhost:8000/feedback';

export const addFeedback = async (data) => {
    try{
       return await axios.post(`${url}/addFeedback`,data)
    }catch(e){
        console.log("Error:",e);
    }
}

export const allFeedback = async () => {
    try{
       return await axios.get(`${url}/allFeedback`)
    }catch(e){
        console.log("Error:",e);
    }
}

export const getFeedback = async (id) => {
    try{
       return await axios.get(`${url}/${id}`)
    }catch(e){
        console.log("Error:",e);
    }
}

export const getFeedbackBySubject = async (search) => {
    try{
       return await axios.get(`${url}/subject/${search}`)
    }catch(e){
        console.log("Error:",e);
    }
}

export const editFeedback = async (feedback, id) => {
    try{
       return await axios.post(`${url}/${id}`, feedback)
    }catch(e){
        console.log("Error:",e);
    }
}

export const deleteFeedback = async (id) => {
    try{
       return await axios.delete(`${url}/${id}`)
    }catch(e){
        console.log("Error:",e);
    }
}