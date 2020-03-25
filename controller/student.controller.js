const Student = require('../model/student.model');

exports.findOne = async (req, res) => {
    console.log(req.params.name);
    const student = await Student.findOne({name: req.params.name});
    res.status(200).send(student);
}

exports.findAll = async (req, res) => {
    const students = await Student.find({});
    res.status(200).send(students);
}