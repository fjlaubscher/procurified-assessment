const { hashPassword, verifyPassword } = require('./password');

describe('hashPassword', () => {
  describe('when given a password', () => {
    it('returns an object with a salt and a hash', () => {
      const actualOutput = hashPassword('password123');

      expect(actualOutput).toHaveProperty('salt');
      expect(actualOutput).toHaveProperty('hash');
    });
  });

  describe('when given an empty string', () => {
    it('throws an error', () => {
      expect(() => hashPassword('')).toThrow('Password cannot be empty');
    });
  });

  describe('when given undefined', () => {
    it('throws an error', () => {
      expect(() => hashPassword('')).toThrow('Password cannot be empty');
    });
  });
});

describe('verifyPassword', () => {
  describe('when given a password, salt, and hash', () => {
    it('returns true if the password matches the hash', () => {
      const { salt, hash } = hashPassword('password123');
      const actualOutput = verifyPassword('password123', salt, hash);

      expect(actualOutput).toBe(true);
    });

    it('returns false if the password does not match the hash', () => {
      const { salt, hash } = hashPassword('password123');
      const actualOutput = verifyPassword('wrongPassword123', salt, hash);

      expect(actualOutput).toBe(false);
    });
  });

  describe('when given an empty string', () => {
    it('returns false', () => {
      const actualOutput = verifyPassword('', 'salt', 'hash');

      expect(actualOutput).toBe(false);
    });
  });

  describe('when given undefined', () => {
    it('returns false', () => {
      const actualOutput = verifyPassword(undefined, 'salt', 'hash');

      expect(actualOutput).toBe(false);
    });
  });
});
