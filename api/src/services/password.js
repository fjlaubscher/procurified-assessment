const { randomBytes, createHmac } = require('crypto');

const HASH_ALGORITHM = 'sha256';
const SALT_BYTES = 16;

const hashPassword = (password) => {
  if (!password) {
    throw new Error('Password cannot be empty');
  }

  try {
    const salt = randomBytes(SALT_BYTES).toString('hex');
    const hash = createHmac(HASH_ALGORITHM, salt).update(password).digest('hex');

    return { salt, hash };
  } catch (error) {
    throw new Error('Error hashing password: ' + error.message);
  }
};

const verifyPassword = (password, salt, hash) => {
  if (!password || !salt || !hash) {
    return false;
  }

  try {
    const newHash = createHmac(HASH_ALGORITHM, salt).update(password).digest('hex');

    return newHash === hash;
  } catch (error) {
    throw new Error('Error verifying password: ' + error.message);
  }
};

module.exports = { hashPassword, verifyPassword };
