const bcrypt = require('bcrypt');

const prisma = require('../lib/prisma');
const AuthtenticationError = require('../exceptions/AuthenticationError');
const {
  generateAccessToken
} = require('../lib/tokenManager');

class AuthService {
  static login = async ({ name, password }) => {
    const user = await prisma.user.findFirst({
      where: {
        name,
      },
    });
    
    if (!user) {
      throw new AuthtenticationError('name incorrect');
    }

    const isPasswordMatch = bcrypt.compareSync(password, user.password);

    if (!isPasswordMatch) {
      throw new AuthtenticationError('wrong password');
    }

    const accessTokenPayload = {
      id: user.id,
      name: user.name,
    };

    const accessToken = generateAccessToken(accessTokenPayload);

    return {
      accessToken,
      user: {
        id: user.id,
        name: user.name,
      },
    };
  };

  static registerUser = async (userData) => {

    const hashedPassword = await bcrypt.hash(userData.password, 10);

    const newUser = await prisma.user.create({
      data: {
        name: userData.name,
        password: hashedPassword,
      },
    });

    return newUser;
  };
}

module.exports = AuthService;