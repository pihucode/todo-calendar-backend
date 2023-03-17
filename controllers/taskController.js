const Task = require('../models/taskModel');
const mongoose = require('mongoose');

const getAllTasks = async (req, res) => {
    const tasks = await Task.find().sort({ date: -1 });
    res.status(200).json(tasks);
}

const getTaskById = async (req, res) => {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No task with id: ${id}`);

    const task = await Task.findById(id);
    res.status(200).json(task);
}

const createTask = async (req, res) => {
    const task = req.body;
    const newTask = new Task(task);
    try {
        await newTask.save();
        res.status(201).json(newTask);
    } catch (error) {
        res.status(409).json({ message: error.message });
    }
}

const updateTask = async (req, res) => {
    const { id } = req.params;
    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No task with id: ${id}`);

    const task = await Task.findOneAndUpdate(
        { _id: id }, { ...req.body }
    );
    res.status(200).json(task);
}

const deleteTask = async (req, res) => {
    const { id } = req.params;
    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No task with id: ${id}`);

    await Task.findByIdAndRemove(id);
    res.status(200).json({ message: 'Task deleted successfully.' });
}

module.exports = {
    getAllTasks,
    getTaskById,
    createTask,
    updateTask,
    deleteTask
}