const jwt = require('jsonwebtoken');

const { TOKEN_EXPIRED_ERR_MSG, TOKEN_INVALID_ERR_MSG } = require('../constants/errorMessage');
const { TOKEN_ERR, TOKEN_EXPIRED_ERR } = require('../constants/errorType');
const InvariantError = require('../exceptions/InvariantError');

exports.createToken = ({ payload, secret, options }) => jwt.sign(payload, secret, options);

exports.decodeToken = (token, secretKey) =>
  new Promise((resolve, reject) => {
    jwt.verify(token, secretKey, (error, decoded) => {
      if (error) {
        if (error.message === 'jwt malformed' || error.message === 'invalid signature') {
          reject(
            new InvariantError(TOKEN_INVALID_ERR_MSG, {
              type: TOKEN_ERR,
            }),
          );
        } else if (error.message === 'jwt expired') {
          reject(
            new InvariantError(TOKEN_EXPIRED_ERR_MSG, {
              type: TOKEN_EXPIRED_ERR,
            }),
          );
        }

        reject(error);
      } else {
        resolve(decoded);
      }
    });
  });

exports.generateAccessToken = ({ id }) => {
  const accessToken = this.createToken({
    payload: { id },
    secret: process.env.ACCESS_TOKEN_SECRET_KEY,
    options: {
      expiresIn: '7d',
    },
  });

  return accessToken;
};

