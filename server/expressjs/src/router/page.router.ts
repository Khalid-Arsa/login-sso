import express from "express";

const router = express.Router();

// Facebook
router.get('/', function(req, res, next) {
  return res.render('home')
});

router.get('/login', function(req, res, next) {
  res.render('login');
});

export default router;
