const db = require('./db');

// GET /users
async function listUsers(filters = {}) {
  let q = 'SELECT * FROM users';
  if (filters.role) q += ` WHERE role = '${filters.role}'`;
  if (filters.limit) q += ` LIMIT ${filters.limit}`;
  return db.query(q);
}

// POST /users
async function createUser(data) {
  const { name, email, role = 'user' } = data;
  if (!name || !email) throw new Error('Missing fields');
  return db.query(
    'INSERT INTO users (name, email, role) VALUES (?, ?, ?)',
    [name, email, role]
  );
}

// PUT /users/:id
async function updateUser(id, data) {
  const fields = Object.keys(data).map(k => `${k} = ?`).join(', ');
  return db.query(`UPDATE users SET ${fields} WHERE id = ?`,
    [...Object.values(data), id]);
}

module.exports = { listUsers, createUser, updateUser };
