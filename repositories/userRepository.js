const User = require("../models/user");

const createUser = async (userData) => {
  const existingUser = await User.findOne({
    where: {
      email: userData.email,
    },
  });

  if (existingUser) {
    throw new Error("Email already registered.");
  }
  return User.create(userData);
};

const getUserById = async (userId) => {
  return User.findByPk(userId);
};

const updateUser = async (userId, newData) => {
  const user = await getUserById(userId);
  if (!user) {
    return null;
  }
  return user.update(newData);
};

const deleteUser = async (userId) => {
  const user = await getUserById(userId);
  if (!user) {
    return null;
  }
  return user.destroy();
};

const getAllUsers = async () => {
  return User.findAll();
};

module.exports = {
  createUser,
  getUserById,
  updateUser,
  deleteUser,
  getAllUsers,
};
