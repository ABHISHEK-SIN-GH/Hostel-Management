import mongoose from "mongoose";

const connection = async (username,password) => {
    const URL = `mongodb://${username}:${password}@ac-scncehg-shard-00-00.nrvnaew.mongodb.net:27017,ac-scncehg-shard-00-01.nrvnaew.mongodb.net:27017,ac-scncehg-shard-00-02.nrvnaew.mongodb.net:27017/?ssl=true&replicaSet=atlas-dde25i-shard-0&authSource=admin&retryWrites=true&w=majority`;
    try {
       await mongoose.connect(URL, {useUnifiedTopology:true, useNewURLParser:true});
       console.log("DB connected successfully!");
    } catch (error) {
        console.log("Error:",error);
    }
}

export default connection;