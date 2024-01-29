const distance = require('./Distance');

exports.Distance = (req, res) => {
    let unit = req.query.unit; 
    let value = req.query.value;

    let result = distance.calculate(unit, parseFloat(value));
    console.log(`Unit: ${unit} , Value: ${value}`);
    res.status(200).send(result.toString());
};