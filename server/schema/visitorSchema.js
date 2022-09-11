import mongoose from "mongoose";
import autoIncrement from 'mongoose-auto-increment';

const visitorSchema = mongoose.Schema({
    vname: String,
    stname: String,
    vmob: Number,
    relation: String,
    visitTimeIN: String,
    visitTimeOut: String,
    visitDate: Date
},{
    timestamps:true
});

autoIncrement.initialize(mongoose.connection);
visitorSchema.plugin(autoIncrement.plugin,'visitor');

const visitor = mongoose.model('visitor', visitorSchema);

export default visitor;