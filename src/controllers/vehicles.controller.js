const helpers = require('../../helpers/helpers');

exports.show = (req, res) => {
    return res.send('NOT IMPLEMENTED: Vehicle detail: ' + req.params.id);
}

exports.list = (req, res) => {
    return helpers.genFakeVehiclesData();
}

exports.create = (req, res) => {
    return res.send('NOT IMPLEMENTED: Vehicle create');
}

exports.update = (req, res) => {
    return res.send('NOT IMPLEMENTED: Vehicle update');
}

exports.destroy = (req, res) => {
    return res.send('NOT IMPLEMENTED: Vehicle destroy');
}

