const Student = require('../model/student.model');

exports.findOne = async (req, res) => {
    const student = await Student.findOne({name: req.params.name});
    res.status(200).send(student);
}

exports.findAll = async (req, res) => {
    const students = await Student.find({});
    res.status(200).send(students);
}

exports.create = async (req, res) => {
    await Student.create(req.body);
    res.status(201).send({message: `Student ${req.body.name} has been created`})
}

exports.delete = async (req, res) => {
    await Student.deleteOne({name: req.params.name});
    res.status(200).send({message: `Student ${req.params.name} has been deleted`})
}

exports.update = async (req, res) => {
    await Student.findOneAndUpdate({name: req.params.name}, req.body);
    res.status(200).send({message: `Student ${req.params.name} has been updated`});
}