var express = require('express')
var fs = require('fs')
var router = express.Router()
var Students = require('./public/js/student')
router.get('/', function (req, res) {
	Students.find(function (err, students) {
		if (err) return res.status(500).send('Server error')
		res.render('index.html', {
			fruits: [
				'苹果',
				'香蕉',
				'橘子'
			],
			students: students
		})
	})

})
router.post('/', function (req, res) {
	Students.add(req.body, function(err) {
		if (err) return res.status(500).send('Server error')
		res.redirect('/')
	})
})
router.get('/edit', function(req, res) {
	const stu = req.query
	res.render('edit.html', {
		stu: stu
	})
})
router.post('/edit/post', function(req, res) {
	console.log('req.query', req.body)
	Students.update(req.body, function(err) {
		if (err) return res.status(500).send('Server error')
		res.redirect('/')
	})

})
router.get('/delete', function(req, res) {
	console.log(req.query)
	Students.deleteById(req.query.id, function(err) {
		if (err) return res.status(500).send('Server err')
		res.redirect('/')
	})
})

module.exports = router
