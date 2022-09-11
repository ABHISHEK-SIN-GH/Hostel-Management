import express from "express";
import Feedback from '../schema/feedbackSchema.js';

const routerFeedback = express.Router();

routerFeedback.post("/addFeedback", async (req,res) => {
    const feedback = req.body;
    const newFeedback = Feedback(feedback);
    try {
        await newFeedback.save();
        res.status(201).json(newFeedback);     
    } catch (error) {
        console.log("Error:",error);
    }
});

routerFeedback.get("/allFeedback", async (req,res)=>{
    try {
        const feedbacks = await Feedback.find({});
        res.status(200).json(feedbacks);
    } catch (error) {
        res.status(404).json({message:error.message});
    }
});

routerFeedback.get("/:id", async (req,res)=>{
    const id = req.params.id;
    try {
        const feedback = await Feedback.findOne({_id:id});
        res.status(200).json(feedback);
    } catch (error) {
        res.status(404).json({message:error.message});
    }
});

routerFeedback.get("/subject/:search", async (req,res)=>{
    const search = req.params.search;
    try {
        const feedback = await Feedback.findOne({subject:search});
        res.status(200).json(feedback);
    } catch (error) {
        res.status(404).json({message:error.message});
    }
});

routerFeedback.post("/:id", async (req,res)=>{
    const feedback = req.body;
    const editFeedback = Feedback(feedback);
    try {
        await Feedback.updateOne({_id:req.params.id},editFeedback);
        res.status(201).json(editFeedback);
    } catch (error) {
        res.status(409).json({message:error.message});
    }
});

routerFeedback.delete("/:id", async (req,res)=>{
    const id = req.params.id;
    try {
        await Feedback.deleteOne({_id:id});
        res.status(200).json({message:"record deleted!"})
    } catch (error) {
        res.status(404).json({message:error.message});
    }
});


export default routerFeedback;