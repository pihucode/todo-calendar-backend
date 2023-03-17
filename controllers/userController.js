// const User = require('../models/userModel');
// const bcrypt = require('bcrypt');
// const jwt = require('jsonwebtoken');
// const mongoose = require('mongoose');

// const getAllUsers = async (req, res) => {
//     const users = await User.find().sort({ dateCreated: -1 });
//     res.status(200).json(users);
// }

// const getUserById = async (req, res) => {
//     const { id } = req.params;

//     if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No user with id: ${id}`);

//     const user = await User.findById(id);
//     res.status(200).json(user);
// }

// const createUser = async (req, res) => {
//     const user = req.body;
//     const newUser = new User(user);
//     try {
//         await newUser.save();
//         res.status(201).json(newUser);
//     } catch (error) {
//         res.status(409).json({ message: error.message });
//     }
// }

// const updateUser = async (req, res) => {
//     const { id } = req.params;
//     if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No user with id: ${id}`);

//     const user = await User.findOneAndUpdate(
//         { _id: id }, { ...req.body }
//     );
//     res.status(200).json(user);
// }

// const deleteUser = async (req, res) => {
//     const { id } = req.params;
//     if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No user with id: ${id}`);

//     await User.findByIdAndRemove(id);
//     res.status(200).json({ message: 'User deleted successfully.' });
// }