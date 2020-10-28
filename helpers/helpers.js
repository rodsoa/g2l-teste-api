const genFakeVehiclesData = () => {
    let data = [];
    for (let count = 0; count < 10; count++) {
        data.push(
            {
                '_id': Math.floor(Math.random() * 100) + 1,
                'owner': `Proprietário Faker #${Math.floor(Math.random() * 100) + 1}`,
                'plate': 'HPW-8904',
                'renavam': '00725031867'
            }
        )
    }
    return data;
}

module.exports = {
  genFakeVehiclesData
};
