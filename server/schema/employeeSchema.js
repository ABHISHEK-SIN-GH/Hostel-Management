import mongoose from "mongoose";
import autoIncrement from 'mongoose-auto-increment';

const employeeSchema = mongoose.Schema({
    fname:String,
    mrname:String,
    frname:String,
    email:String,
    mob:Number,
    address:String,
    dob:Date,
    idproof:String,
    idproofnum:String,
    role:String,
    salary:Number,
    doj:Date,
    dol:Date,
},{
    timestamps:true
})

autoIncrement.initialize(mongoose.connection);
employeeSchema.plugin(autoIncrement.plugin,'employee');

const employee = mongoose.model('employee', employeeSchema);

export default employee;