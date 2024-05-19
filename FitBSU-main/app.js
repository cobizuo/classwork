const express = require('express');
const morgan = require('morgan');
const mongoose = require('mongoose');
const workoutRoutes = require('./routes/workoutRoutes');

//express app
const app = express();

//connect to MongoDB
const dbURI = 'mongodb+srv://bsbulldog:Nr4VhsiRbMDmVKx7@fitbsu.p5suaus.mongodb.net/FitBSU?retryWrites=true&w=majority&appName=FitBSU';
mongoose.connect(dbURI, { useNewURLParser: true, useUnifiedTopology: true })
    .then((result) => app.listen(3500))
    .catch((err) => console.log(err));


//register view engine
app.set('view engine', 'ejs');

//middleware and static files
app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));
app.use(morgan('dev'));
app.use((req, res, next) => {
    res.locals.path = req.path;
    next();
  });


//routes
app.get('/', (req, res) => {
    res.redirect('/workouts');
});

app.get('/about', (req, res) => {
    res.render('about', { title: 'About'});
});

app.use('/workouts', workoutRoutes);

//404 Response
app.use((req, res) => {
    res.status(404).render('404', { title: '404'});
});