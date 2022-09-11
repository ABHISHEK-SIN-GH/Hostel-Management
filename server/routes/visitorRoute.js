import express from "express";
import Visitor from "../schema/visitorSchema.js";

const routerVisitor = express.Router();

routerVisitor.post("/addVisitor", async (req,res) => {
    const visitor = req.body;
    const newVisitor = Visitor(visitor);

    try {
        await newVisitor.save();
        res.status(201).json(newVisitor);
    } catch (error) {
        console.log("Error: ",error);
    }
});

routerVisitor.get("/allVisitor", async (req,res)=>{
    try {
        const visitors = await Visitor.find({});
        res.status(200).json(visitors);
    } catch (error) {
        res.status(404).json({message:error.message});
    }
});

routerVisitor.get("/:id", async (req,res)=>{
    const id = req.params.id;
    try {
        const visitor = await Visitor.findOne({_id:id});
        res.status(200).json(visitor);
    } catch (error) {
        res.status(404).json({message:error.message});
    }
});

routerVisitor.get("/name/:search", async (req,res)=>{
    const search = req.params.search;
    try {
        const visitor = await Visitor.findOne({vname:search});
        res.status(200).json(visitor);
    } catch (error) {
        res.status(404).json({message:error.message});
    }
});

routerVisitor.post("/:id", async (req,res)=>{
    const visitor = req.body;
    const editVisitor = Visitor(visitor);
    try {
        await Visitor.updateOne({_id:req.params.id},editVisitor);
        res.status(201).json(editVisitor);
    } catch (error) {
        res.status(409).json({message:error.message});
    }
});

routerVisitor.delete("/:id", async (req,res)=>{
    const id = req.params.id;
    try {
        await Visitor.deleteOne({_id:id});
        res.status(200).json({message:"record deleted!"})
    } catch (error) {
        res.status(404).json({message:error.message});
    }
});

export default routerVisitor;