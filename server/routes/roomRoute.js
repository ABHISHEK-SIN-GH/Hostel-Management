import express from "express";
import Room from "../schema/roomSchema.js";

const routerRoom = express.Router();

routerRoom.post("/addRoom", async (req,res)=>{
    const room = req.body;
    const newRoom = Room(room);
    try {
        await newRoom.save();
        res.status(201).json(newRoom);
    } catch (error) {
        console.log("Error:",error);
    }
})

routerRoom.get("/allRoom", async (req,res)=>{
    try {
        const rooms = await Room.find({});
        res.status(200).json(rooms);
    } catch (error) {
        res.status(404).json({message:error.message});
    }
});

routerRoom.get("/:id", async (req,res)=>{
    const id = req.params.id;
    try {
        const room = await Room.findOne({_id:id});
        res.status(200).json(room);
    } catch (error) {
        res.status(404).json({message:error.message});
    }
});

routerRoom.get("/room/:search", async (req,res)=>{
    const search = req.params.search;
    try {
        const room = await Room.findOne({roomNo:search});
        res.status(200).json(room);
    } catch (error) {
        res.status(404).json({message:error.message});
    }
});

routerRoom.post("/:id", async (req,res)=>{
    const room = req.body;
    const editRoom = Room(room);
    console.log(req.params.id);
    try {
        await Room.updateOne({_id:req.params.id},editRoom);
        res.status(201).json(editRoom);
    } catch (error) {
        res.status(409).json({message:error.message});
    }
});

routerRoom.delete("/:id", async (req,res)=>{
    const id = req.params.id;
    try {
        await Room.deleteOne({_id:id});
        res.status(200).json({message:"record deleted!"})
    } catch (error) {
        res.status(404).json({message:error.message});
    }
});


export default routerRoom;