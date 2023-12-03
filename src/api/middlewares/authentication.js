const { NOT_FOUND_ERR } = require('../../constants/errorType');
const ROLE = require('../../constants/role');
const AuthenticationError = require('../../exceptions/AuthenticationError');
const { decodeToken } = require('../../lib/tokenManager');
const CompanyService = require('../../services/company');
const UserService = require('../../services/user');

const authentication = async (req, res, next) => {
  try {
    const bearerToken = req.headers?.authorization;

    if (!bearerToken) {
      throw new AuthenticationError();
    }

    const token = bearerToken.split(' ')[1];


    if (!user) {
      throw new AuthenticationError();
    }

    delete user.password;
    req.user = user;

    next();
  } catch (error) {
    if (error?.type === NOT_FOUND_ERR) {
      next(new AuthenticationError());
    }

    next(error);
  }
};

module.exports = authentication;
