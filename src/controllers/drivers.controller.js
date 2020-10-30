const helpers = require('../../helpers/helpers');
const Driver = require('../models/driver.model');

exports.show = (req, res) => {
    Driver
        .findOne({ cpf: req.params.cpf })
        .populate('Vehicle')
        .then(result => {
            const plate = req.params.cpf;
            if ( result === null ){
                return res.json(404, { cpf: plate, message: `Driver ${cpf} not found in our database`})
            }
            res.json(result);
        })
        .catch(error => res.status(500).json(error));
}

exports.list = (req, res) => {
    return Driver
            .find()
            .populate('Vehicle')
            .then(result => {
                res.json(result)
            })
            .catch(error => {
                res.status(500).json(error)
            });
}

exports.create = (req, res) => {
    const driver = new Driver({
        name: req.body.name,
        last_name: req.body.last_name,
        cpf:req.body.cpf,
        birthdate: req.body.birthdate,
        status: req.body.status,
        vehicles: req.body.vehicles,
        status: req.body.status
    });

    driver
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
        name: req.body.name,
        last_name: req.body.last_name,
        cpf:req.body.cpf,
        birthdate: req.body.birthdate,
        status: req.body.status
    }

    helpers.clean(data);

    Driver
        .findOneAndUpdate({ cpf: req.params.cpf }, data, { new: true })
        .then(result => {
            const cpf = req.params.cpf;
            if ( result === null ){
                return res.json(404, { cpf: plate, message: `Driver ${cpf} not found in our database`})
            }
            return res.json(result);
        })
        .catch(error => res.status(500).json(error));
}

exports.add = (req, res) => {
    Driver
        .findOneAndUpdate({cpf: req.body.cpf}, {$addToSet: {vehicles: req.body.vehicle}}, { new: true})
        .then( driver => {
            if ( driver === null ) {
                return res.json(404, { cpf: plate, message: `Driver ${cpf} not found in our database`})
            }
            return res.json(driver) 
        })
        .catch(error => res.status(500).json(error));
}

exports.remove = (req, res) => {
    Driver
        .findOneAndUpdate({cpf: req.body.cpf}, {$pull: {vehicles: req.body.vehicle}}, { new: true})
        .then( driver => {
            if ( driver === null ) {
                return res.json(404, { cpf: plate, message: `Driver ${cpf} not found in our database`})
            }
            return res.json(driver) 
        })
        .catch(error => res.status(500).json(error));
}

exports.destroy = (req, res) => {
    Driver.findOneAndDelete({ cpf: req.params.cpf })
    .then(result => {
        const cpf = req.params.cpf;
        if ( result === null ){
            return res.json(404, { cpf: plate, message: `Driver ${cpf} not found in our database`})
        }
        res.json(result);
    })
    .catch(error => res.status(500).json(error));
}