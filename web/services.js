var app = require('./app.js')
app.service('Ser', function () {
	this.fullName = function () {
		return "from service"
	}
})