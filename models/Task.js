const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const taskSchema = new Schema({
    title: { type:String, required: true, maxlength: 100 },
    description: { type: String, maxlength: 500 },
    status: { type: String, enum: [ 'pending', 'in-progress', 'completed'], default: 'pending'},
    priority: { type: Number, required: true, min: 1, max: 5 },
    dueDate: { type: Date }
}, { timestamps: true });

const Task = mongoose.model('Task', taskSchema);

module.exports = Task;