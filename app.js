const express = require('express');
const app = express();

const client = require('./config/db');
const mainRouter = require('./routes/');
const createError = require('http-errors');
const errorMiddleware = require('./middleware/error-handling.middleware');

const PORT = process.env.PORT || 8000;

app.use(express.json());

app.use('/api', mainRouter);

app.use('*', (req, res, next) => {
	next(createError(404));
});

app.use(errorMiddleware);
app.listen(PORT, () => {
	console.log(`app is running on ${PORT}`);
});
