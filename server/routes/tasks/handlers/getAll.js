const Task = require('../../../models/Task')

function getAll(req,res) {

  Task.find()
      .then( Task => {
      	
      	res.json(Task)
      })
}

module.exports = getAll