const User = require('../models/userModel');

// Simple service functions using Mongoose

async function createUser(data) {
  const user = new User(data);
  return user.save();
}

async function getUsers(filter = {}) {
  return User.find(filter).sort({ createdAt: -1 }).lean();
}

async function getUserById(id) {
  return User.findById(id).lean();
}

async function updateUser(id, update) {
  const options = { new: true, runValidators: true };
  return User.findByIdAndUpdate(id, update, options).lean();
}

async function deleteUser(id) {
  const result = await User.findByIdAndDelete(id);
  return result !== null;
}

module.exports = {
  createUser,
  getUsers,
  getUserById,
  updateUser,
  deleteUser
};
