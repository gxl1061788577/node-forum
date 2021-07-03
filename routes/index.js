const users = require('./users');
const article = require('./article');

module.exports = (app) => {
	app.use('/api',users);
	app.use('/api', article);
}
