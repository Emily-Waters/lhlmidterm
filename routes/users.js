/*
 * All routes for Users are defined here
 * Since this file is loaded in server.js into api/users,
 *   these routes are mounted onto /users
 * See: https://expressjs.com/en/guide/using-middleware.html#middleware.router
 */

const express = require('express');
const router  = express.Router();
const userQueries = require('../db/user-queries');

// GET users table
router.get("/", (req, res) => {
  userQueries.getUsers()
    .then((users) => {
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
  const queryParams = req.params.id;
  userQueries.getUsersById(queryParams)
    .then((user) => {
      res.json({ user });
    })
    .catch(err => {
      res
        .status(500)
        .json({ error: err.message });
    });
});

router.post('/login', (req, res) => {
  const userName = req.body.name;
  login(userName)
    .then(user => {
      req.session = user;
      res.json(req.session);
    })
    .catch(err => console.log(err));
});

router.post('/logout', (req, res) => {
  req.session = null;
  res.json(req.session);
});

router.post('/register', (req,res) => {
  // const userName = req.query.name;
  // const userPhone = req.query.phone;
  userQueries.
    registerUser(req.query)
    .then((data) => res.send(data))
    .catch(err => console.log('ERROR: ', err.messages));
});

const login = (userName) => {
  return userQueries
    .getUserByName(userName)
    .then(user => {
      if (user) {
        console.log('login success!');
        console.log('user: ', user);
        return user;
      }
    })
    .catch(err => err);
};

// export router object
module.exports = router;
