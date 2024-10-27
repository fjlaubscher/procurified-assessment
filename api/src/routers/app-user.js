const { Router } = require('express');

// data
const {
  createAppUserAsync,
  getAppUserByEmailAsync,
  getAppUserByIdAsync
} = require('../data/app-user');

// middleware
const authMiddleware = require('../middleware/auth');

// services
const { createJWT } = require('../services/jwt');
const { hashPassword, verifyPassword } = require('../services/password');

const router = Router();

router.get('/me', authMiddleware, async (req, res) => {
  try {
    const appUserId = req.currentAppUser.id;
    const user = await getAppUserByIdAsync(appUserId);

    return res.status(200).json({ status: 'success', data: user });
  } catch (ex) {
    return res.status(500).json({ status: 'error', message: ex.message });
  }
});

router.post('/login', async (req, res) => {
  try {
    const { email, password } = req.body || {};
    const user = await getAppUserByEmailAsync(email);

    if (user && verifyPassword(password, user.passwordSalt, user.passwordHash)) {
      const token = createJWT(user);

      if (token) {
        return res.status(200).json({ status: 'success', data: { token } });
      }
    }

    return res.status(401).json({ status: 'error', message: 'Invalid email or password' });
  } catch (ex) {
    return res.status(500).json({ status: 'error', message: ex.message });
  }
});

router.post('/register', async (req, res) => {
  try {
    const { firstName, surname, email, password } = req.body || {};
    const user = await getAppUserByEmailAsync(email);

    if (user) {
      return res.status(400).json({ status: 'error', message: 'User already exists' });
    }

    const { salt, hash } = hashPassword(password);
    const appUser = await createAppUserAsync({ firstName, surname, email, password, salt, hash });
    const token = createJWT(appUser);

    return res.status(200).json({ status: 'success', data: { token } });
  } catch (ex) {
    return res.status(500).json({ status: 'error', message: ex.message });
  }
});

module.exports = router;
