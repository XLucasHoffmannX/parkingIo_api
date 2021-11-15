import mongoose from 'mongoose';

const parkingSchema = new mongoose.Schema({
    client_id: {
        type: String, 
        required: true
    },
    model:{
        type: String,
        trim: true
    },
    ref: {
        type: String,
        required: true
    },
    category: {
        type: String
    },
    descripition: {
        type: String
    },
    createAt: {
        type: String
    }
}, {timestamps: true})

const Parking = mongoose.model("Parking", parkingSchema);

export default Parking;