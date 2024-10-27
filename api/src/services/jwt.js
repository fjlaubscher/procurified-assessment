const { sign, verify } = require('jsonwebtoken');

const createJWT = (appUser) => {
  const JWT_SECRET = process.env.JWT_SECRET;

  if (!JWT_SECRET) {
    throw new Error('JWT_SECRET is not defined');
  }

  if (!appUser) {
    return null;
  }

  return sign(
    {
      id: appUser.id,
      email: appUser.email,
      firstName: appUser.firstName,
      lastName: appUser.lastName
    },
    JWT_SECRET,
    { expiresIn: '1d' }
  );
};

const verifyJWT = (token) => {
  const JWT_SECRET = process.env.JWT_SECRET;

  if (!JWT_SECRET) {
    throw new Error('JWT_SECRET is not defined');
  }

  if (!token) {
    return null;
  }

  return verify(token, JWT_SECRET);
};

module.exports = { createJWT, verifyJWT };
