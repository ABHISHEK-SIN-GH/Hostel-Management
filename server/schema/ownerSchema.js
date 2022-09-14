import mongoose from "mongoose";
import autoIncrement from "mongoose-auto-increment";

const ownerSchema = mongoose.Schema({
    uname: String,
    password: String,
},{
    timestamps:true
})

autoIncrement.initialize(mongoose.connection);
ownerSchema.plugin(autoIncrement.plugin,'owner');

const owner = mongoose.model('owner',ownerSchema);

export default owner;