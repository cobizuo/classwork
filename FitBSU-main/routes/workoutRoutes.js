const express = require('express');
const router = express.Router();
const workoutController = require('../controllers/workoutController');

//homepage
router.get('/', workoutController.workout_index);

//Saves data from submit and stores it into the database
router.post('/', workoutController.workout_create_post);

//loads the create page
router.get('/create', workoutController.workout_create_get);

//Retrieves blog data from database
router.get('/:id', workoutController.workout_details);

//deletes logs
router.delete('/:id', workoutController.workout_delete);


module.exports = router;