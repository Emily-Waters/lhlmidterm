/*
 * All routes for Users are defined here
 * Since this file is loaded in server.js into api/users,
 *   these routes are mounted onto /users
 * See: https://expressjs.com/en/guide/using-middleware.html#middleware.router
 */

const express = require('express');
const router  = express.Router();

module.exports = (db) => {

  // GET users table
  router.get("/", (req, res) => {
    db
      .query(`SELECT * FROM users;`)
      .then(data => {
        const users = data.rows;
        res.json({ users });
      })
      .catch(err => {
        res
          .status(500)
          .json({ error: err.message });
      });
  });

  // GET user by id
  router.get('/:id', (req, res) => {
    const queryParams = [req.params.id];
    db
      .query(`SELECT * FROM users WHERE id = $1;`,queryParams)
      .then(data => {
        const user = data.rows[0];
        res.json({ user });
      })
      .catch(err => {
        res
          .status(500)
          .json({ error: err.message });
      });
  });
  return router;
};
