import mongoose from "mongoose";
import autoIncrement from "mongoose-auto-increment";

const feedbackSchema = mongoose.Schema({
    name:String,
    subject: String,
    description: String
},{
    timestamps:true
})

autoIncrement.initialize(mongoose.connection);
feedbackSchema.plugin(autoIncrement.plugin,'feedback');

const feedback = mongoose.model('feedback',feedbackSchema);

export default feedback;