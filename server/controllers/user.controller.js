const { User } = require("../models/user.model");
const bcrypt = require("bcrypt");

module.exports.getAllUsers = (req, res) => {
  User.find()
    .then(allUsers => res.json(allUsers))
    .catch(err => res.json(err));
};
module.exports.getOneUser = (req, res) => {
  User.findOne({ _id: req.params.id })
    .then(user => res.json(user))
    .catch(err => res.json(err));
};
module.exports.updateUser = (req, res) => {
  User.update({ _id: req.params.id }, req.body)
    .then(user => res.json(user))
    .catch(err => res.json(err));
};
module.exports.deleteUser = (req, res) => {
  User.remove({ _id: req.params.id })
    .then(user => res.json(user))
    .catch(err => res.json(err));
};
module.exports.createUser = (req, res) => {
  User.create(req.body)
    .then(user => res.json(user))
    .catch(err => res.json(err));
};
module.exports.login = (req, res) => {
  User.findOne({ email: req.body.email })
    .then(user => {
      user.comparePassword(req.body.password, (err, isMatch) => {
        if (err) return res.json(err);
        else res.json(user);
      });
    })
    .catch(err => res.json(err));
};
