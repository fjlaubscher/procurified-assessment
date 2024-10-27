const toCamelCase = (input) =>
  input.toLowerCase().replace(/[^a-zA-Z0-9]+(.)/g, (m, chr) => chr.toUpperCase());

const mapFromPSQL = (rows) => {
  return rows.map((r) => {
    const result = {};

    Object.keys(r).forEach((k) => {
      const camelCaseKey = toCamelCase(k);
      const value = r[k];

      result[camelCaseKey] = value instanceof Date ? value.toISOString() : value;
    });

    return result;
  });
};

module.exports = mapFromPSQL;
