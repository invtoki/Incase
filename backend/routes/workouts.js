const express = require('express')
const {
    createWorkout,
    getWorkout,
    getWorkouts,
    deleteWorkout,
    updateWorkout,
} = require('../controllers/workoutController')

const router = express.Router()

//GET ALL WORKOUTS
router.get('/', getWorkouts)

//GET A SINGLE WORKOUT
router.get('/:id', getWorkout)

//POST A NEW WORKOUT
router.post('/', createWorkout)

//DELETE A NEW WORKOUT
router.delete('/:id', deleteWorkout)

//UPDATE A NEW WORKOUT
router.patch('/:id', updateWorkout)

module.exports = router