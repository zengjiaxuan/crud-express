var express = require('express')
var fs = require('fs')
var router = express.Router()
router.get('/', function (req, res) {
	fs.readFile('public/json/students.json', 'utf-8', function (err, data) {
		if (err) return res.status(500).send('Server error')
		res.render('index.html', {
			fruits: [
				'苹果',
				'香蕉',
				'橘子'
			],
			students: JSON.parse(data).students
		})
	})

})
router.post('/add', function (req, res) {
	res.send(req.body)
})
module.exports = router