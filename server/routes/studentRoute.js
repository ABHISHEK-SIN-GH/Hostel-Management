import express from "express";
import Student from '../schema/studentSchema.js'

const routerStudent = express.Router();

routerStudent.post("/addStudent", async (req,res)=>{
    const student = req.body;
    const newStudent = Student(student);
    try {
        await newStudent.save();
        res.status(201).json(newStudent);
    } catch (error) {
        console.log("Error:",error);
    }
});

routerStudent.get("/allStudent", async (req,res)=>{
    try {
        const students = await Student.find({});
        res.status(200).json(students);
    } catch (error) {
        res.status(404).json({message:error.message});
    }
});

routerStudent.get("/:id", async (req,res)=>{
    const id = req.params.id;
    try {
        const student = await Student.findOne({_id:id});
        res.status(200).json(student);
    } catch (error) {
        res.status(404).json({message:error.message});
    }
});

routerStudent.get("/name/:search", async (req,res)=>{
    const search = req.params.search;
    try {
        const student = await Student.findOne({fname:search});
        res.status(200).json(student);
    } catch (error) {
        res.status(404).json({message:error.message});
    }
});

routerStudent.post("/:id", async (req,res)=>{
    const student = req.body;
    const editStudent = Student(student);
    try {
        await Student.updateOne({_id:req.params.id},editStudent);
        res.status(201).json(editStudent);
    } catch (error) {
        res.status(409).json({message:error.message});
    }
});

routerStudent.delete("/:id", async (req,res)=>{
    const id = req.params.id;
    try {
        await Student.deleteOne({_id:id});
        res.status(200).json({message:"record deleted!"})
    } catch (error) {
        res.status(404).json({message:error.message});
    }
});

export default routerStudent;