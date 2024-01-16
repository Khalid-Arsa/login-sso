import express from "express";

const router = express.Router();

// Facebook
router.get('/', function(req, res, next) {
  return res.render('home')
});

export default router;
