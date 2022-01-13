const db = require('./index');

const getUsers = () => {
  return db.query(`SELECT * FROM users;`)
    .then((res) => {
      return res.rows;
    })
    .catch((err) => {
      console.log(err.message);
    });
};

const getUsersById = (id) => {
  return db.query('SELECT * FROM users WHERE id = $1;', [id])
    .then((res) => {
      return res.rows[0];
    })
    .catch((err) => {
      console.log(err.message);
    });
};

const getUserByName = (name) => {
  return db
    .query(`SELECT * FROM users WHERE name = $1`, [name])
    .then(res => res.rows[0])
    .catch(err => err);
};

const registerUser = (userData) => {
  console.log(userData);
  return db
    .query(`INSERT INTO users (name, phone) VALUES ($1, $2)`, [userData.name, '+1' + userData.phone])
    .then(res => res.rows[0])
    .catch(err => err);
};

module.exports = {
  getUsers,
  getUsersById,
  getUserByName,
  registerUser
};
