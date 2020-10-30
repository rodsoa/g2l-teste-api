const mongoose = require('mongoose');

const VehicleSchema = new mongoose.Schema({
    owner_name: {
        type: String,
        required: true
    },
    plate: {
        type: String,
        required: true,
        index: true,
        unique: true
    },
    renavam: {
        type: String,
        required: true,
        index: true,
        unique: true
    }
});

module.exports = mongoose.model('Vehicle', VehicleSchema);
