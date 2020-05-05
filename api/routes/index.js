var express = require('express');
var router = express.Router();
const passport = require('passport');
const Strategy = require('passport-local').Strategy;
const bcrypt = require('bcrypt-nodejs');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

// //Passport
// passport.use(
//   new Strategy(
//     {
//       usernameField: "username",
//       passwordField: "password"
//     },
//     async (username, password, cb) => {
//       const user = await new UserService().getUserByName(username)

//       if (!user) {
//         return cb(null, false);
//       }
//       if (!bcrypt.compareSync(password, user.password)) {
//         return cb(null, false);
//       }
//       return cb(null, user);

//     }
//   )
// )

// passport.serializeUser(function (user, cb) {
//   cb(null, user.user);
// });

// passport.deserializeUser(async (username, cb) => {
//   const user = await new UserService().getUserByName(username)

//   cb(null, user);
// });

// //IsLogged

// async function isLogged(req, res, next) {
//   const userData = req.user;

//   if (!userData){
//     return res.sendStatus(401);
//   }
//   const user = await new UserService().getUserByName(userData.user);
//   if (!user) {
//     return res.sendStatus(401);
//   }
//   next();
// }


// //Ruta Login
// router.post('/login', (req, res, next) => {
//   passport.authenticate('local', function(err, user, info) {

//     if (err) {
//         return next(err);
//     }

//     if (!user) {
//         return res.status(401).json({
//             err: info
//         });
//     }

//     req.logIn(user, function(err) {

//         if (err) {
//             return res.status(500).json({
//                 err: 'Could not log in user'
//             });
//         }

//         res.status(200).json(req.user);

//     });
//   })(req, res, next);
// })

// Comics

const ComicsController = require('../controllers/ComicsController');
const ComicsService = require('../services/ComicsService');
const ComicsInstance = new ComicsController(new ComicsService());

//Articles
const ArticlesController = require('../controllers/ArticlesController');
const ArticlesService = require('../services/ArticlesService');
const ArticlesInstance = new ArticlesController(new ArticlesService());

//Users
const UserController = require('../controllers/UserController');
const UserService = require('../services/UserService');
const UserInstance = new UserController(new UserService());



router.get('/comics', (req, res)=>{
  ComicsInstance.getComics(req, res)
});

router.post('/comics', (req, res)=>{
  ComicsInstance.postComics(req, res)
});

router.get('/comics/:id', (req, res)=>{
  ComicsInstance.getComicsById(req, res)
});

router.get('/blog', (req, res)=>{
  ArticlesInstance.getArticles(req, res)
  });
  
router.post('/blog', (req, res)=>{
  ArticlesInstance.postArticles(req, res)
  });
  
router.get('/blog/:id', (req, res) => {
    ArticlesInstance.getArticlesById(req, res)
  });

router.get('/users', (req, res) =>{
    UserInstance.getUsers(req,res)
  });
  
router.post('/users', (req,res)=>{
    UserInstance.postUsers(req,res)
  });
  
  
module.exports = router;
