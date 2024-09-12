const { StatusCodes } = require("http-status-codes");
const { UserRepository } = require("../repositories");
const { AppError } = require("../utils/");

const userRepository = new UserRepository();
async function createUser(data) {
  console.log(data);
  try {
    const response = await userRepository.create(data);
    return response;
  } catch (error) {
    console.log(error.name);

    throw new AppError(error.message, StatusCodes.INTERNAL_SERVER_ERROR);
  }
}

module.exports = {
  createUser,
};
