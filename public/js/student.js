const fs = require('fs')
const studentsPath = '../crud-express/public/json/students.json'
function find(callback) {
	fs.readFile(studentsPath, 'utf8', function(err, data) {
		if (err) {
			console.log(err)
			return callback(err)
		}
		callback(null, JSON.parse(data).students)
	})
}
function add (student, callback) {
	fs.readFile(studentsPath, 'utf8', function(err, data) {
		if (err) {
			console.log(err)
			return callback(err)
		}
		const students = JSON.parse(data).students
		student.id = students.length + 1
		students.push(student)
		const fileData = JSON.stringify({
			students: students
		})
		fs.writeFile(studentsPath, fileData, function(err) {
			if (err) {
				console.log(err)
				return callback(err)
			}
			callback(null)
		})
	})
}
function update (student, callback) {
	fs.readFile(studentsPath, 'utf8', function(err, data) {
		if (err) {
			console.log(err)
			return callback(err)
		}
		const students = JSON.parse(data).students
		student.id = parseInt(student.id)
		const stu = students.find(function(item) {
			return item.id === student.id
		})
		for(key in student) {
			stu[key] = student[key]
		}
		const fileData = JSON.stringify({
			students: students
		})
		fs.writeFile(studentsPath, fileData, function(err) {
			if (err) {
				console.log(err)
				return callback(err)
			}
			callback(null)
		})
	})
}
function deleteById (id, callback) {
	fs.readFile(studentsPath, 'utf8', function(err, data) {
		if (err) {
			console.log(err)
			return callback(err)
		}
		const students = JSON.parse(data).students
		const deletId = students.findIndex(function (item) {
			return item.id === parseInt(id)
		})
		students.splice(deletId, 1)
		const fileData = JSON.stringify({
			students: students
		})
		fs.writeFile(studentsPath, fileData, function(err) {
			if (err) {
				console.log(err)
				return callback(err)
			}
			callback(null)
		})
	})
	
}
module.exports = {
	find,
	add,
	update,
	deleteById
}