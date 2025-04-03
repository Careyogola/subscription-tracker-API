import mongoose from "mongoose";

import { MONGO_URI } from '../config/env.js';

if(!MONGO_URI) {
    throw new Error("MONGO_URI is not defined");
}

const connectToDatabase = async () => {
    try {
        await mongoose.connect(MONGO_URI);
        console.log('connected to DB');
    } catch (error) {
        console.log('error connecting to DB', error);
        process.exit(1);
    }
}

export default connectToDatabase;