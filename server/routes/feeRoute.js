import express from "express";
import Fee from "../schema/feeSchema.js";

const routerFee = express.Router();

routerFee.post("/addFees", async (req,res)=>{
    const fee = req.body;
    const newFee = Fee(fee);
    try {
        await newFee.save();
        res.status(201).json(newFee);
    } catch (error) {
        console.log("Error:",error);
    }
})

routerFee.get("/allFees", async (req,res)=>{
    try {
        const fees = await Fee.find({});
        res.status(200).json(fees);
    } catch (error) {
        res.status(404).json({message:error.message});
    }
});

routerFee.get("/:id", async (req,res)=>{
    const id = req.params.id;
    try {
        const fee = await Fee.findOne({_id:id});
        res.status(200).json(fee);
    } catch (error) {
        res.status(404).json({message:error.message});
    }
});

routerFee.post("/:id", async (req,res)=>{
    const fee = req.body;
    const editFee = Fee(fee);
    try {
        await Fee.updateOne({_id:req.params.id},editFee);
        res.status(201).json(editFee);
    } catch (error) {
        res.status(409).json({message:error.message});
    }
});

routerFee.delete("/:id", async (req,res)=>{
    const id = req.params.id;
    try {
        await Fee.deleteOne({_id:id});
        res.status(200).json({message:"record deleted!"})
    } catch (error) {
        res.status(404).json({message:error.message});
    }
});

export default routerFee;