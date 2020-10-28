const mongoose = require('mongoose');

const DriverSchema = mongoose.Schema({
    name: { type: String, required: true },
    last_name: { type: String, required: true },
    cpf: {
        type: String,
        required: true,
        index: true,
        unique: true
    },
    birthdate: { type: Date, required: false },
    status: { type: Boolean, default: true, required: false },
    vehicles: [{type: ObjectId, ref: "Vehicle"}],

}, { timestamps: true });

module.exports = mongoose.model('Driver', DriverSchema);
