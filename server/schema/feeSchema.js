import mongoose from "mongoose";
import autoIncrement from "mongoose-auto-increment";

const feeSchema = mongoose.Schema({
    studentName: String,
    dueDate: Date,
    dueAmount: Number,
    deposit: Number,
    rent: Number,
    paymentMode: String,
    paymentDate: Date
},{
    timestamps:true
})

autoIncrement.initialize(mongoose.connection);
feeSchema.plugin(autoIncrement.plugin,'fee');

const fee = mongoose.model('fee',feeSchema);

export default fee;