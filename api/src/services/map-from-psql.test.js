const mapFromPSQL = require('./map-from-psql');

describe('mapFromPSQL', () => {
  describe('when given an array of objects with snake_case keys', () => {
    it('returns an array of objects with camelCase keys', () => {
      const input = [
        { id: 1, first_name: 'John', last_name: 'Doe' },
        { id: 2, first_name: 'Jane', last_name: 'Smith' }
      ];
      const expectedOutput = [
        { id: 1, firstName: 'John', lastName: 'Doe' },
        { id: 2, firstName: 'Jane', lastName: 'Smith' }
      ];
      const actualOutput = mapFromPSQL(input);

      expect(actualOutput).toEqual(expectedOutput);
    });
  });
});
