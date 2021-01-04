const express = require('express');
const router = express.Router();
const {
	getAllTodolist,
	createTodolist,
	updateTodolist,
	deleteTodolist,
} = require('../controller/todolist.controller');

router.get('/', getAllTodolist);
router.post('/', createTodolist);
router.put('/:todolistId', updateTodolist);
router.delete('/:todolistId', deleteTodolist);

module.exports = router;
