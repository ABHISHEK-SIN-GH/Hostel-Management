import mongoose from "mongoose";
import autoIncrement from 'mongoose-auto-increment';

const studentSchema = mongoose.Schema({
    fname: String,
    mrname: String,
    frname: String,
    email: String,
    mob: Number,
    address: String,
    dob: Date,
    idproof: String,
    idproofnum: String,
    mess: String
},{
    timestamps:true
})

autoIncrement.initialize(mongoose.connection);
studentSchema.plugin(autoIncrement.plugin,'student');

const student = mongoose.model('student', studentSchema);

export default student;