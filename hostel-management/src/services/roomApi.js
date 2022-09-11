import axios from 'axios';

const url = 'http://localhost:8000/room';

export const addRoom = async (data) => {
    try{
       return await axios.post(`${url}/addRoom`,data)
    }catch(e){
        console.log("Error:",e);
    }
}

export const allRooms = async () => {
    try{
       return await axios.get(`${url}/allRoom`)
    }catch(e){
        console.log("Error:",e);
    }
}

export const getRoom = async (id) => {
    try{
       return await axios.get(`${url}/${id}`)
    }catch(e){
        console.log("Error:",e);
    }
}

export const getRoomByNumber = async (search) => {
    try{
       return await axios.get(`${url}/room/${search}`)
    }catch(e){
        console.log("Error:",e);
    }
}

export const editRoom = async (room, id) => {
    console.log(room);
    try{
       return await axios.post(`${url}/${id}`, room)
    }catch(e){
        console.log("Error:",e);
    }
}

export const deleteRoom = async (id) => {
    try{
       return await axios.delete(`${url}/${id}`)
    }catch(e){
        console.log("Error:",e);
    }
}