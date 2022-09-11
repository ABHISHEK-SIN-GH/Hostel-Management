import mongoose from "mongoose";
import autoIncrement from 'mongoose-auto-increment';

const roomSchema = mongoose.Schema({
    roomNo : Number,
    numOfBeds : Number,
    bedsVacant : Number,
    rent: Number,
    studentNames : String,
    studentIds: String,
    status: String,
},{
    timestamps:true
})

autoIncrement.initialize(mongoose.connection);
roomSchema.plugin(autoIncrement.plugin,'room');

const room = mongoose.model('room', roomSchema);

export default room;