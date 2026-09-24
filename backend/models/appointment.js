import mongoose from "mongoose";
import validator from "validator";

const appointmentSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: [true, "Please provide your first name"],
        maxLength: [30, "First name cannot exceed 30 characters"],
        minLength: [3, "First name must contain 3 characters"]
    },
    lastName: {
        type: String,
        required: [true, "Please provide your last name"],
        maxLength: [30, "Last name cannot exceed 30 characters"],
    },
    phoneNumber: {
        type: String,
        required: [true, "Please provide your phone number"],  
        validate: [validator.isMobilePhone, "Please provide a valid phone number"],
        minLength: [10, "Phone number must contain 10 digits"],
        maxLength: [10, "Phone number cannot exceed 10 digits"]
    },
    service: {
        type: String,
        required: [true, "Please provide a service for the appointment"],
        enum: {
            values: [
                "Haircut","Shaving", "Facial", "Hair Coloring", "Hair Styling", "Beard Trim", "Massage", "Manicure", "Pedicure"],
            message: "Please select a valid service for the appointment",
            },
    },
    time: {
        type: String,
        required: [true, "Please provide a time for the appointment"],
    },
    date: {
        type: String,
        required: [true, "Please provide a date for the appointment"],
    },
    status: {
        type:String,
        enum: ["Pending","Approved","Declined"],
        default: "Pending"
    }
}, { timestamps: true });//track when each document is created and when it was last updated

export const Appointment = mongoose.model("Appointment", appointmentSchema);