const { verifyJWT } = require('../services/jwt');

const authMiddleware = require('./auth');

jest.mock('../services/jwt', () => ({
  verifyJWT: jest.fn()
}));

const verifyJWTMock = verifyJWT;

describe('authMiddleware', () => {
  describe('when the request has no authorization header', () => {
    it('should return a 401 error', async () => {
      verifyJWTMock.mockReturnValue(null);

      const req = { headers: {} };
      const res = { status: jest.fn().mockReturnThis(), json: jest.fn() };
      const next = jest.fn();

      await authMiddleware(req, res, next);

      expect(verifyJWTMock).toHaveBeenCalledWith(null);
      expect(res.status).toHaveBeenCalledWith(401);
      expect(res.json).toHaveBeenCalledWith({ status: 'error', message: 'Unauthorized' });
      expect(next).not.toHaveBeenCalled();
    });
  });

  describe('when the request has an invalid token', () => {
    it('should return a 401 error', async () => {
      verifyJWTMock.mockReturnValue(null);

      const req = { headers: { authorization: 'Bearer invalid-token' } };
      const res = { status: jest.fn().mockReturnThis(), json: jest.fn() };
      const next = jest.fn();

      await authMiddleware(req, res, next);

      expect(res.status).toHaveBeenCalledWith(401);
      expect(res.json).toHaveBeenCalledWith({ status: 'error', message: 'Unauthorized' });
      expect(next).not.toHaveBeenCalled();
    });
  });

  describe('when the request has a valid token', () => {
    it('sets the currentAppUser on the request and calls the next function', async () => {
      verifyJWTMock.mockReturnValue({ id: 1 });

      const req = {
        headers: {
          authorization: 'Bearer valid-token'
        }
      };
      const res = { status: jest.fn().mockReturnThis(), json: jest.fn() };
      const next = jest.fn();

      await authMiddleware(req, res, next);

      expect(verifyJWTMock).toHaveBeenCalledWith('valid-token');
      expect(req.currentAppUser).toEqual({ id: 1 });
      expect(next).toHaveBeenCalled();
    });
  });
});
