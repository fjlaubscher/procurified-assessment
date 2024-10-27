const { Client } = require('pg');

// services
const { hashPassword } = require('../services/password');
const mapFromPSQL = require('../services/map-from-psql');

const createAppUserAsync = async (appUser) => {
  const client = new Client();
  await client.connect();

  if (!appUser.email || !appUser.firstName || !appUser.surname || !appUser.password) {
    throw new Error('Invalid user data');
  }

  try {
    const { salt, hash } = hashPassword(appUser.password);
    const query = `
      INSERT INTO app_user (email, first_name, surname, password_salt, password_hash)
      VALUES ($1, $2, $3, $4, $5)
      RETURNING id, first_name, surname, email
    `;
    const { rows } = await client.query(query, [
      appUser.email,
      appUser.firstName,
      appUser.surname,
      salt,
      hash
    ]);

    return mapFromPSQL(rows)[0];
  } catch (ex) {
    throw new Error('Error creating user: ' + ex.message);
  } finally {
    await client.end();
  }
};

const getAppUserByEmailAsync = async (email) => {
  const client = new Client();
  await client.connect();

  try {
    const query = `
      SELECT id, first_name, surname, email, password_salt, password_hash
      FROM app_user
      WHERE email = $1
    `;
    const { rows } = await client.query(query, [email]);

    return mapFromPSQL(rows)[0];
  } catch (ex) {
    throw new Error('Error getting user: ' + ex.message);
  } finally {
    await client.end();
  }
};

const getAppUserByIdAsync = async (id) => {
  if (!id) {
    throw new Error('Invalid app user id');
  }

  const client = new Client();
  await client.connect();

  try {
    const query = `
      SELECT id, first_name, surname, email
      FROM app_user
      WHERE id = $1
    `;
    const { rows } = await client.query(query, [id]);

    return mapFromPSQL(rows)[0];
  } catch (ex) {
    throw new Error('Error getting user: ' + ex.message);
  } finally {
    await client.end();
  }
};

module.exports = { createAppUserAsync, getAppUserByEmailAsync, getAppUserByIdAsync };
