const express = require('express');
const Task = require('../models/Task');
const router = express.Router();

// Get(get)
router.get('/', async (req, res) => {
    try { 
        const allTasks = await Task.find();
        res.json(allTasks);     
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});
// create(post)
router.get('/', async (req, res) => {
    const { title, description, status, priority} = req.body 
    try { 
        const newTask = new Task({ title, description, status, priority});
        const saved = await newTask.save();
        res.json(saved);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});
// update(put)
router.get('/:id', async (req, res) => {
    try { 
        const updatedTask = await Task.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true },
        );
    res.json(updatedTask);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});
// delete(delete)
router.get('/:id', async (req, res) => {
    try { 
        await Task.findByIdAndDelete(req.params.id);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

module.exports = router;