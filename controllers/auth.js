const User = require('../models/user')

exports.getLogin = (req, res, next) => {
  res.render("auth/login", {
    path: "/auth",
    pageTitle: "Login",
    isAuthenticated: false
  });
};

exports.postLogin = (req, res, next) => {
  req.session.isLoggedIn = true
  User.findById("5fa0a75078410e70011a3f7e")
    .then((user) => {
      req.session.isLoggedIn = true;
      req.session.user = user;
      req.session.save(err => {
        console.log(err)
        res.redirect("/")
      })
    })
    .catch((err) => console.log(err));
}

exports.postLogout = (req, res, next) => {
  req.session.destroy(err => {
    console.log(err)
    res.redirect("/")
  })
}