"use strict";
const { Router } = require('express');
const { getPosts } = require('../controllers/postsController');
const { getUsers } = require('../controllers/usersController');
const routes = new Router();
routes.route('/posts')
    .get(getPosts);
routes.route('/users')
    .get(getUsers);
module.exports = routes;
