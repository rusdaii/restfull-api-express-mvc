const userService = require("../services/userService");
const responseHandler = require("../middlewares/responseHandler");
const errorHandler = require("../middlewares/errorHandler");
const bcrypt = require("bcrypt");
const saltRounds = 10;

const createUser = async (req, res) => {
  try {
    const { id, email, gender, password, role } = req.body;
    const hashedPassword = await bcrypt.hash(password, saltRounds);
    const newUser = await userService.createUser({
      id,
      email,
      gender,
      password: hashedPassword,
      role,
    });
    responseHandler(
      res,
      {
        message: "User created successfully.",
        user: newUser,
      },
      201
    );
  } catch (error) {
    if (error.message === "Email already registered.") {
      return responseHandler(
        res,
        { message: "Email already registered." },
        400
      );
    }
    errorHandler(res, 500, "Internal Server Error.");
  }
};

const getAllUsers = async (req, res) => {
  try {
    const allUsers = await userService.getAllUsers();
    responseHandler(res, allUsers);
  } catch (error) {
    errorHandler(res, 500, "Internal Server Error.");
  }
};

const getUserById = async (req, res) => {
  try {
    const userId = req.params.id;
    const user = await userService.getUserById(userId);
    if (!user) {
      return responseHandler(res, { message: "User not found." }, 404);
    }
    responseHandler(res, user);
  } catch (error) {
    errorHandler(res, 500, "Internal Server Error.");
  }
};

const updateUser = async (req, res) => {
  try {
    const userId = req.params.id;
    const newData = req.body;
    const updatedUser = await userService.updateUser(userId, newData);
    if (!updatedUser) {
      return responseHandler(res, { message: "User not found." }, 404);
    }
    responseHandler(res, {
      message: "User updated successfully.",
      user: updatedUser,
    });
  } catch (error) {
    errorHandler(res, 500, "Internal Server Error.");
  }
};

const deleteUser = async (req, res) => {
  try {
    const userId = req.params.id;
    const deletedUser = await userService.deleteUser(userId);
    if (!deletedUser) {
      return responseHandler(res, { message: "User not found." }, 404);
    }
    responseHandler(res, {
      message: "User deleted successfully.",
    });
  } catch (error) {
    errorHandler(res, 500, "Internal Server Error.");
  }
};

module.exports = {
  createUser,
  getUserById,
  updateUser,
  deleteUser,
  getAllUsers,
};
