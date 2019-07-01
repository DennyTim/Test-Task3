const User = require('../models/users');

const getAll = (req, res, next) => {
  User
    .fetchAll()
    .then(([rows, fieldData]) => {
      res.json(rows);
    });
};

const getById = (req, res, next) => {
  const id = req.params.id;
  User
    .findById(id)
    .then(([user]) => {
      res.json(user);
    })
    .catch(err => console.log(err));
};

const getOverId = (req, res, next) => {
  const id = req.params.custom;
  User
    .findCustomUsers(id)
    .then(([rows, fieldData]) => {
      res.json(rows);
    })
    .catch(err => console.log(err));
};

const createUser = (req, res, next) => {
  const { name, age } = req.body;
  const user = new User(null, name, age);
  user
    .save()
    .then(() => {
      res.status(200).json({ msg: 'User created' });
    })
    .catch((err => res.status(200).json({ msg: err.message })));
}

module.exports = {
  getAll,
  getById,
  getOverId,
  createUser
}