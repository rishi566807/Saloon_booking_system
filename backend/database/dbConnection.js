import mongoose from "mongoose";

export const dbConnection =   () => {
    mongoose.connect(process.env.MONGO_URI, {
        dbName: "service_booking_system",
    })
    .then(() => {
        console.log("MongoDB connected successfully");
    })
    .catch((err) => {
         console.log(`Some error occurred while connecting to database: ${err}`);
    });
};

export default dbConnection;