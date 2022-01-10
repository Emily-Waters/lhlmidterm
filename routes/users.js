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
      if (!user) {
        res.send({error: "error"});
        return;
      }
      req.session.userId = user.id;
      res.send({user: {name: user.name, id: user.id}});
      res.redirect('/');
    })
    .catch(err => res.send(err));
});

router.post('/logout', (req, res) => {
  req.session = null;
  res.send({message: 'logged out'});
  res.redirect('/');
});

const login = (userName) => {
  return userQueries
    .getUserByName(userName)
    .then(user => {
      console.log('login success!');
      return user;
    });
};

// export router object
module.exports = router;
