const { Client } = require('pg');

// services
const mapFromPSQL = require('../services/map-from-psql');

const createSWAPIRequestAsync = async (swapiRequest) => {
  if (!swapiRequest.query || !swapiRequest.response) {
    throw new Error('Invalid SWAPI request data');
  }

  const client = new Client();
  await client.connect();

  try {
    const query = `
      INSERT INTO swapi_request (query, response)
      VALUES ($1, $2)
      RETURNING id, query, response, last_updated
    `;
    const { rows } = await client.query(query, [
      swapiRequest.query,
      JSON.stringify(swapiRequest.response)
    ]);

    return mapFromPSQL(rows)[0];
  } catch (ex) {
    throw new Error('Error creating swapi request: ' + ex.message);
  } finally {
    await client.end();
  }
};

const getSWAPIRequestByQueryAsync = async (swapiQuery) => {
  if (!swapiQuery) {
    throw new Error('Invalid SWAPI query');
  }

  const client = new Client();
  await client.connect();

  try {
    const query = `
      SELECT id, query, response, last_updated
      FROM swapi_request
      WHERE query = $1
    `;
    const { rows } = await client.query(query, [swapiQuery]);

    return mapFromPSQL(rows)[0];
  } catch (ex) {
    throw new Error('Error getting swapi request: ' + ex.message);
  } finally {
    await client.end();
  }
};

const updateSWAPIRequestAsync = async (swapiRequest) => {
  if (!swapiRequest.query || !swapiRequest.response) {
    throw new Error('Invalid SWAPI request data');
  }

  const client = new Client();
  await client.connect();

  try {
    const query = `
      UPDATE swapi_request
      SET
        response = $1,
        last_updated = NOW()
      WHERE query = $2
      RETURNING id, query, response, last_updated
    `;
    const { rows } = await client.query(query, [swapiRequest.response, swapiRequest.query]);

    return mapFromPSQL(rows)[0];
  } catch (ex) {
    throw new Error('Error updating swapi request: ' + ex.message);
  } finally {
    await client.end();
  }
};

module.exports = { createSWAPIRequestAsync, getSWAPIRequestByQueryAsync, updateSWAPIRequestAsync };
