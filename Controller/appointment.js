import { Appointments } from "../Models/Appointment.js";


export const appointmentSubmit = async (req, res) => {
     try{
        const {name, address, age, phone, gender, dateChoose, timeChoose} = req.body;
    let appointments = await Appointments.create({
        name, address, age, phone, gender, dateChoose, timeChoose
    })
    res.json({message:"Appointment has been submitted successfully...!"})
    } catch (error) {
        res.json(error.message);
    }
   
}

export const getAllAppointment = async (req, res) => {
    let appointments = await Appointments.find();
    if(!appointments) return res.json({message:"Appointments not found", success: false})

        res.json({message:'All appointments are fetched',appointments, success: true})
}

export const getAppointmentById = async (req, res) => {

    const id = req.params.id;

    let appointment = await Appointments.findById(id);

    if (!appointment) {
        return res.json({
            message: "Such appointment Id does not exist",
            success: false
        });
    }

    res.json({
        message: "Appointment fetched",
        appointment,
        success: true
    });
}

export const UpdateAppointmentById = async (req, res) => {
    const id = req.params.id;

    let appointment = await Appointments.findByIdAndUpdate(id, req.body, {new: true});
    if(!appointment) return res.json({message:"appointment id does not exist", success: false});

    res.json({message:'Update appointment successfully', appointment});
}

export const DeleteAppointmentById = async (req, res) => {
    const id = req.params.id;

    let appointment = await Appointments.findByIdAndDelete(id);
    if(!appointment) return res.json({message:"appointment id does not exist", success: false});

    res.json({message:'Delete appointment successfully', appointment});
}