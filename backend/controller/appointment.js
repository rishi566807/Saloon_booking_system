import { ErrorHandler } from "../error/error.js";
import { Appointment } from "../models/appointment.js";

// Create a new appointment
export const sendAppointment = async (req, res, next) => {

    const { firstName, lastName, phoneNumber, service, time, date } = req.body;

    if (!firstName || !lastName || !phoneNumber || !service || !time || !date) {
        return next(new ErrorHandler("Please provide all required fields", 400));
    }

    try {
        const appointment = await Appointment.create({ firstName, lastName, phoneNumber, service, time, date });
        res.status(201).json({
            success: true,
            message: "Appointment created successfully",
            appointment
        });
    } catch (error) {

        //when the user fail our input rules
        if (error.name === "ValidationError") {

            //Extract exact error messages and send them in the response
            const validationErrors = Object.values(error.errors).map((err) => err.message);

            return next(new ErrorHandler(validationErrors.join(", "), 400));
        }

        next(error);
    }
};

// Fetch all appointments
export const getAppointment = async (req, res, next) => {
  try {
    const appointments = await Appointment.find().sort({ createdAt: -1 });
    res.status(200).json({ success: true, appointments });
  } catch (error) {
    next(error);
  }
};

//update data
export const updateAppointment = async (req, res, next) => {
    try{
        const { id } = req.params;
        const { status } = req.body;
        const appointment = await Appointment.findByIdAndUpdate(
            id, { status }, { returnDocument: "after", runValidators: true }
        //send id, what to update, return updated data,  ensuring status
        );

        if (!appointment) {
      return next(new ErrorHandler("Appointment not found", 404));
    }

        res.status(200).json({ success: true, message: 'Status updated!', appointment });
    }
    catch(error) {
    next(error);
    }
}

//Delete appointment
export const deleteAppointment = async (req, res, next) => {
    try{
         const { id } = req.params;
         const appointment = await Appointment.findByIdAndDelete(id);

         if (!appointment) {
      return next(new ErrorHandler("Appointment not found", 404));
    }
         res.status(200).json({ success: true, message: 'Appointment deleted!' })
    }
    catch (error){
        next(error)
    }
}

 