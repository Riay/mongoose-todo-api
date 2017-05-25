const mongoose = require('mongoose')
const Schema = mongoose.Schema

const TaskSchema = new Schema ({
    name: {
      type: String,
      required: true
    },
    createdTask: {
       type: Number,
       default: +new Date()
    },
    modificatedTask: {
       type: Number,
       default: +new Date()
    },
    completedTask: {
       type: Boolean,
       default: false
    }


})

const Task = mongoose.model('Task', TaskSchema)

module.exports = Task