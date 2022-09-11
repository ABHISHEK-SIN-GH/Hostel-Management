import express from "express";
import Employee from '../schema/employeeSchema.js'

const routerEmployee = express.Router();

routerEmployee.post("/addEmployee", async (req,res)=>{
    const employee = req.body;
    const newEmployee = Employee(employee);
    try {
        await newEmployee.save();
        res.status(201).json(newEmployee);
    } catch (error) {
        console.log("Error:",error);
    }
});

routerEmployee.get("/allEmployee", async (req,res)=>{
    try {
        const employees = await Employee.find({});
        res.status(200).json(employees);
    } catch (error) {
        res.status(404).json({message:error.message});
    }
});

routerEmployee.get("/:id", async (req,res)=>{
    const id = req.params.id;
    try {
        const employee = await Employee.findOne({_id:id});
        res.status(200).json(employee);
    } catch (error) {
        res.status(404).json({message:error.message});
    }
});

routerEmployee.get("/name/:search", async (req,res)=>{
    const search = req.params.search;
    try {
        const employee = await Employee.findOne({fname:search});
        res.status(200).json(employee);
    } catch (error) {
        res.status(404).json({message:error.message});
    }
});

routerEmployee.post("/:id", async (req,res)=>{
    const employee = req.body;
    const editEmployee = Employee(employee);
    try {
        await Employee.updateOne({_id:req.params.id},editEmployee);
        res.status(201).json(editEmployee);
    } catch (error) {
        res.status(409).json({message:error.message});
    }
});

routerEmployee.delete("/:id", async (req,res)=>{
    const id = req.params.id;
    try {
        await Employee.deleteOne({_id:id});
        res.status(200).json({message:"record deleted!"})
    } catch (error) {
        res.status(404).json({message:error.message});
    }
});

export default routerEmployee;