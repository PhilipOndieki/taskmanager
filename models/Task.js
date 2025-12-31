// 1. import mongoose
// 2. initialize Schema 
// 3. create taskSchema
// 4. model Task
// 5. module exports 

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const taskSchema = new Schema({
    title: { type:String, required: true, max: 100 },
    description: { type: String, max: 500 },
    status: { type: String, enum: [ 'pending', 'in-progress', 'completed'], default: 'pending'},
    priority: { type: Number},
    dueDate: { type: Date }
}, { timestamps: true });

const Task = mongoose.model('Task', taskSchema);

module.exports = Task;