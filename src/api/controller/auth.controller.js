const { successResponse } = require('../../lib/response');
const AuthService = require('../../services/auth');
const authValidation = require('../../validation/auth');

class AuthController {
  static login = async (req, res, next) => {
    try {
      authValidation.validateLoginPayload(req.body);

      const { accessToken, user } = await AuthService.login(req.body);

      return res.status(200).json(
        successResponse({
          message: 'Login success',
          data: {
            accessToken,
            user
          },
        }),
      );
    } catch (error) {
      next(error);
    }
  };

  static registerUser = async (req, res, next) => {
    try {
      authValidation.validateRegisterUserPayload(req.body);

      const user = await AuthService.registerUser(req.body);

      return res.status(201).json(
        successResponse({
          message: 'Success create user',
          data: {
            id: user.id,
            name: user.name
          },
        }),
      );
    } catch (error) {
      next(error);
    }
  };
}

module.exports = AuthController;
