import express from "express";
import Student from '../schema/studentSchema.js';
import Employee from "../schema/employeeSchema.js";
import Admin from "../schema/adminSchema.js";
import Owner from "../schema/ownerSchema.js";


const routerLogin = express.Router();

routerLogin.post("/student", async (req,res)=>{
    const user = req.body;
    const userEmail = user.userEmail;
    const userPassword = user.userPassword;
    try {
        const student = await Student.findOne({email:userEmail,fname:userPassword});
        // console.log("student:",student);
        res.status(200).json(student);
    } catch (error) {
        res.status(404).json({message:error.message});
    }
});

routerLogin.post("/employee", async (req,res)=>{
    const user = req.body;
    const userEmail = user.userEmail;
    const userPassword = user.userPassword;
    try {
        const employee = await Employee.findOne({email:userEmail,fname:userPassword});
        // console.log("employee:",employee);
        res.status(200).json(employee);
    } catch (error) {
        res.status(404).json({message:error.message});
    }
});

routerLogin.post("/admin", async (req,res)=>{
    const user = req.body;
    const userEmail = user.userEmail;
    const userPassword = user.userPassword;
    try {
        const admin = await Admin.findOne({uname:userEmail,password:userPassword});
        // console.log("admin:",admin);
        res.status(200).json(admin);
    } catch (error) {
        res.status(404).json({message:error.message});
    }
});

routerLogin.post("/owner", async (req,res)=>{
    const user = req.body;
    const userEmail = user.userEmail;
    const userPassword = user.userPassword;
    try {
        const owner = await Owner.findOne({uname:userEmail,password:userPassword});
        // console.log("owner:",owner);
        res.status(200).json(owner);
    } catch (error) {
        res.status(404).json({message:error.message});
    }
});

export default routerLogin;