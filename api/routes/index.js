var express = require('express');
var router = express.Router();
const passport = require('passport');
const Strategy = require('passport-local').Strategy;
const bcrypt = require('bcrypt-nodejs');

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: 'Express' });
});

// Comics

const ComicsController = require('../controllers/ComicsController');
const ComicsService = require('../services/ComicsService');
const ComicsInstance = new ComicsController(new ComicsService());


// Free comics

const FreeComicsController = require('../controllers/FreeComicsController');
const FreeComicsService = require('../services/FreeComicsService');
const FreeComicsInstance = new FreeComicsController(new FreeComicsService());

//Articles
const ArticlesController = require('../controllers/ArticlesController');
const ArticlesService = require('../services/ArticlesService');
const ArticlesInstance = new ArticlesController(new ArticlesService());

//Users
const UserController = require('../controllers/UserController');
const UserService = require('../services/UserService');
const UserInstance = new UserController(new UserService());



passport.serializeUser(function (user, cb) {
  cb(null, user.user);
});

passport.deserializeUser(async (username, cb) => {
  const user = await new UserService().getUserByName(username)
  cb(null, user);
});

// //Passport
passport.use(
  new Strategy(
    {
      usernameField: "username",
      passwordField: "password"
    },
    async (username, password, cb) => {
      const user = await new UserService().getUserByName(username)

      if (!user) {
        return cb(null, false);
      }
      if (!bcrypt.compareSync(password, user.password)) {
        return cb(null, false);
      }
      return cb(null, user);

    }
  )
)



// //IsLogged

async function isLogged(req, res, next) {
  const userData = req.user;

  if (!userData) {
    return res.sendStatus(401);
  }
  const user = await new UserService().getUserByName(userData.user);
  if (!user) {
    return res.sendStatus(401);
  }
  next();
}


//Ruta Login
router.post("/login", passport.authenticate("local"), function (req, res) {
  return res.json(req.user);
});

router.get('/comics', (req, res) => {
  ComicsInstance.getComics(req, res)
});

router.post('/comics', (req, res) => {
  ComicsInstance.postComics(req, res)
});

router.get('/comics/:id', (req, res) => {
  ComicsInstance.getComicsById(req, res)
});

router.get('/blog', (req, res) => {
  ArticlesInstance.getArticles(req, res)
});

router.post('/blog', (req, res) => {
  ArticlesInstance.postArticles(req, res)
});

router.get('/blog/:id', (req, res) => {
  ArticlesInstance.getArticlesById(req, res)
});

router.get('/users', (req, res) => {
  UserInstance.getUsers(req, res)
});

router.post('/users', (req, res) => {
  UserInstance.postUsers(req, res)
});

router.get('/freecomics', (req, res) =>{
  FreeComicsInstance.getFreeComics(req,res)
});

router.post('/freecomics', (req,res) =>{
  FreeComicsInstance.postFreeComics(req,res)
});

module.exports = router;
