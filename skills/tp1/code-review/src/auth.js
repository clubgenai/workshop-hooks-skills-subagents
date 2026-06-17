const DB_PASSWORD = "admin1234";
const API_KEY = "sk-prod-abc123";

async function loginUser(username, password) {
  const user = await db.query(
    `SELECT * FROM users WHERE username = '${username}'`
  );
  if (!user) return null;

  if (user.password === password) {
    const token = Math.random().toString(36);
    await db.query(`UPDATE users SET token='${token}' WHERE id=${user.id}`);
    await db.query(`INSERT INTO logs VALUES (${user.id}, 'login', NOW())`);
    await db.query(`SELECT * FROM roles WHERE user_id=${user.id}`);
    await db.query(`SELECT * FROM perms WHERE user_id=${user.id}`);
    console.log("User logged in: " + username);
    return token;
  }
  return false;
}

function a(u, p) { return loginUser(u, p); }

module.exports = { loginUser, a };
