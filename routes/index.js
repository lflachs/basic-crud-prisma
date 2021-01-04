// const router = require('express').Router()
const express = require('express');
const todolistRouter = require('./todolist.route');

const router = express.Router();
router.get('/', (req, res, next) => {
	res.status(200).json({ message: 'Welcome!' });
});
router.use('/todolist', todolistRouter);

module.exports = router;
