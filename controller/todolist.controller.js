const client = require('../config/db');

exports.createTodolist = async (req, res, next) => {
	try {
		const { title } = req.body;
		const createdTodolist = await client.todolist.create({
			data: { title: title },
		});
		res.status(200).json(createdTodolist);
	} catch (err) {
		next(err);
	}
};

exports.updateTodolist = async (req, res, next) => {
	try {
		const id = Number(req.params.todolistId);
		const newTitle = req.body.title;

		const updatedTodolist = await client.todolist.update({
			where: { id: id },
			data: { title: newTitle },
		});
		res.status(200).json(updatedTodolist);
	} catch (err) {
		next(err);
	}
};

exports.deleteTodolist = async (req, res, next) => {
	try {
		const id = Number(req.params.todolistId);

		const deletedTodolist = await client.todolist.delete({
			where: { id: id },
		});
		res.status(200).json(deletedTodolist);
	} catch (err) {
		next(err);
	}
};

exports.getAllTodolist = async (req, res, next) => {
	try {
		const todolist = await client.todolist.findMany();
		res.status(200).json(todolist);
	} catch (err) {
		next(err);
	}
};
