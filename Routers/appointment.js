import express from 'express'
import {appointmentSubmit, DeleteAppointmentById, getAllAppointment, getAppointmentById, UpdateAppointmentById} from '../Controller/appointment.js'


const router = express.Router();

router.post("/submit", appointmentSubmit)

router.get('/all', getAllAppointment)

router.get('/:id', getAppointmentById)

router.put('/:id', UpdateAppointmentById)

router.delete('/:id', DeleteAppointmentById)

export default router;