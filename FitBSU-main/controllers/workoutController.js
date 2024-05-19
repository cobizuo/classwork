const Workout = require('../models/workouts');

const workout_index = (req, res) => {
    Workout.find().sort({ createdAt: -1 })
        .then((result) => {
            res.render('index', { workouts: result, title: 'All Workouts' });
        })
        .catch((err) => {
            console.log(err);
        });
}

const workout_details = (req, res) => {
    const id = req.params.id;
    Workout.findById(id)
        .then((result) => {
            res.render('details', { workout: result, title: 'Workout Details' });
        })
        .catch((err) => {
            console.log(err);
        });
}

const workout_create_get = (req, res) => {
    res.render('create', { title: 'Log a Workout' });
}

const workout_create_post = (req, res) => {
    const workout = new Workout(req.body);

    workout.save()
        .then((result) => {
            res.redirect('/workouts');
        })
        .catch((err) => {
            console.log(err);
        });
}

const workout_delete = (req, res) => {
    const id = req.params.id;
    Workout.findByIdAndDelete(id)
        .then((result) => {
            res.json({ redirect: '/workouts' });
        })
        .catch((err) => {
            console.log(err);
        });
}

module.exports = {
    workout_index,
    workout_details,
    workout_create_get,
    workout_create_post,
    workout_delete
}