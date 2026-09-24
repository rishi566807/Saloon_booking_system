import express from "express";
import { sendAppointment,
    updateAppointment,
    getAppointment,
    deleteAppointment
 } from "../controller/appointment.js";

const router = express.Router();


// Route to create a new appointment
router.post("/send", sendAppointment);
router.get('/getall', getAppointment);
router.put('/update/:id', updateAppointment);
router.delete('/delete/:id', deleteAppointment);


export default router;