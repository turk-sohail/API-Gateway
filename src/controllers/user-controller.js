const { StatusCodes } = require("http-status-codes");
const { UserService } = require("../services");
const { SuccessResponse, ErrorResponse, AppError } = require("../utils");

async function signup(req, res) {
  try {
    const response = await UserService.createUser({
      email: req.body.email,
      password: req.body.password,
    });
    SuccessResponse.data = response;

    return res.status(StatusCodes.CREATED).json(SuccessResponse);
  } catch (error) {
    throw new AppError(error.message, error.statusCode);
  }
}

module.exports = {
  signup,
};
