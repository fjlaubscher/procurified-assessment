// services
const { verifyJWT } = require('../services/jwt');

const authMiddleware = async (req, res, next) => {
  try {
    const token = req.headers.authorization ? req.headers.authorization.split(' ')[1] : null;
    const decoded = verifyJWT(token);

    if (decoded) {
      req.currentAppUser = decoded;
      return next();
    }

    return res.status(401).json({ status: 'error', message: 'Unauthorized' });
  } catch (ex) {
    return res.status(500).json({ status: 'error', message: ex.message });
  }
};

module.exports = authMiddleware;
