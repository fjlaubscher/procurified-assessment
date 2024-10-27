const { createJWT, verifyJWT } = require('./jwt');

// this is being done to mock the env values
jest.mock('process');

describe('createJWT', () => {
  beforeEach(() => {
    process.env.JWT_SECRET = 'catsdogscatsdogs';
  });

  describe('when given an appUser', () => {
    it('returns a JWT', () => {
      const appUser = {
        id: 1,
        email: 'email@email.com',
        firstName: 'John',
        lastName: 'Doe'
      };

      const actualOutput = createJWT(appUser);
      expect(actualOutput).toBeTruthy();
    });
  });

  afterEach(() => {
    jest.resetModules();
  });
});

describe('verifyJWT', () => {
  beforeEach(() => {
    process.env.JWT_SECRET = 'catsdogscatsdogs';
  });

  describe('when given a valid JWT', () => {
    it('returns the decoded JWT', () => {
      const appUser = {
        id: 1,
        email: 'email@email.com',
        firstName: 'John',
        lastName: 'Doe'
      };

      const jwt = createJWT(appUser);
      const decodedAppUser = verifyJWT(jwt);

      expect(decodedAppUser).toEqual(expect.objectContaining(appUser));
    });
  });

  describe('when given an invalid JWT', () => {
    it('throws an error', () => {
      const jwt = 'invalid';
      expect(() => verifyJWT(jwt)).toThrow();
    });
  });

  afterEach(() => {
    jest.resetModules();
  });
});
