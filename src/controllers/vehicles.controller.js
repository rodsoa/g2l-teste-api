const helpers = require('../../helpers/helpers');
const Vehicle = require('../models/vehicle.model');

exports.show = (req, res) => {
    Vehicle
        .findOne({ plate: req.params.plate })
        .then(result => {
            const plate = req.params.plate;
            if ( result === null ){
                return res.json(404, { plate: plate, message: `Vehicle ${plate} not found in our database`})
            }
            res.json(result);
        })
        .catch(error => res.status(500).json(error));
}

exports.list = (req, res) => {
    return Vehicle
            .find()
            .then(result => {
                res.json(result)
            })
            .catch(error => {
                res.status(500).json(error)
            });
}

exports.create = (req, res) => {
    const vehicle = new Vehicle({
        owner_name: req.body.owner_name,
        plate: req.body.plate,
        renavam: req.body.renavam
    });

    vehicle
        .save()
        .then(result => {
            res.json(result);
        })
        .catch(error => {
            res.status(500).json(error);
        });
}

exports.update = (req, res) => {
    let data = {
        owner_name: req.body.owner_name,
        plate: req.body.plate,
        renavam: req.body.renavam
    }

    helpers.clean(data);

    Vehicle
        .findOneAndUpdate({ plate: req.params.plate }, data, { new: true })
        .then(result => {
            const plate = req.params.plate;
            if ( result === null ){
                return res.json(404, { plate: plate, message: `Vehicle ${plate} not found in our database`})
            }
            res.json(result);
        })
        .catch(error => res.status(500).json(error));
}

exports.destroy = (req, res) => {
    Vehicle.findOneAndDelete({ plate: req.params.plate })
    .then(result => {
        const plate = req.params.plate;
        if ( result === null ){
            return res.json(404, { plate: plate, message: `Vehicle ${plate} not found in our database`})
        }
        res.json(result);
    })
    .catch(error => res.status(500).json(error));
}

