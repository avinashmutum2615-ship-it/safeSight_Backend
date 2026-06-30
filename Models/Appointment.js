import mongoose from "mongoose";


const appointmentSchema = new mongoose.Schema({
    name:{type: String, require: true},
    address:{type: String, require: true},
    age:{type: String, require: true},
    phone:{type: String, require: true},
    gender:{type: String, require: true},
    dateChoose:{type: String, require: true},
    timeChoose:{type: String, require: true},
    createdAt:{type: Date, default: Date.now},
    call:{type: String, default: "No"},
    confirm:{type: String, default: "No"},
})

export const Appointments =  mongoose.model('appointments',appointmentSchema);