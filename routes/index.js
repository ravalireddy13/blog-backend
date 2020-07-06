var express = require('express');
var Category = require("../models/category");
var Post = require("../models/post");
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
  res.send('Hello');
  res.status(200);
});

router.get('/category', function(req, res, next) {
  Category.find(function (err, categories) {
    if (err) return next(err);
    res.json(categories);
  });
});

router.get('/bycategory/:id', function(req, res, next) {
  Post.find({category: req.params.id}, function (err, posts) {
    if (err) return next(err);
    res.json(posts);
  });
});

router.get('/post', function(req, res, next) {
  Post.find(function (err, posts) {
    if (err) return next(err);
    res.json(posts);
  });
});

router.get('/post/:id', function(req, res, next) {
  Post.findById(req.params.id, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

module.exports = router;