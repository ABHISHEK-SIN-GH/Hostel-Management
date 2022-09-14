import mongoose from "mongoose";
import autoIncrement from "mongoose-auto-increment";

const adminSchema = mongoose.Schema({
    uname: String,
    password: String,
},{
    timestamps:true
})

autoIncrement.initialize(mongoose.connection);
adminSchema.plugin(autoIncrement.plugin,'admin');

const admin = mongoose.model('admin',adminSchema);

export default admin;