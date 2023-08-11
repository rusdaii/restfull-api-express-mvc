const userRepository = require("../repositories/userRepository");

const createUser = async (userData) => {
  return userRepository.createUser(userData);
};

const getUserById = async (userId) => {
  return userRepository.getUserById(userId);
};

const updateUser = async (userId, newData) => {
  return userRepository.updateUser(userId, newData);
};

const deleteUser = async (userId) => {
  return userRepository.deleteUser(userId);
};

const getAllUsers = async () => {
  return userRepository.getAllUsers();
};

module.exports = {
  createUser,
  getUserById,
  updateUser,
  deleteUser,
  getAllUsers,
};
