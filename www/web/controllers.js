var app = require('./app.js')
app.controller('MainCtrl', function ($scope, Ser) {
	$scope.name = 'testttt'
	$scope.fname = Ser.fullName()
})