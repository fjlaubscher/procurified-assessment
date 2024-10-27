const isSWAPIRequestStale = require('./is-swapi-request-stale');

describe('isSWAPIRequestStale', () => {
  describe('when given a request that is not stale', () => {
    it('returns false', () => {
      const now = new Date();

      const result = isSWAPIRequestStale(now);
      expect(result).toBeFalsy();
    });
  });

  describe('when given a request that is stale', () => {
    it('returns true', () => {
      const oldDate = new Date();
      oldDate.setMinutes(oldDate.getMinutes() - 20);

      const result = isSWAPIRequestStale(oldDate);
      expect(result).toBeTruthy();
    });
  });
});
