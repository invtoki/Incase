const Workout = require('../models/workoutModel')
const mogoose = require('mongoose')
const asyncHandler = require('express-async-handler')

//get all workouts
const getWorkouts = async (req, res) => {
    const workout = await Workout.find({}).sort({createdAt: -1}) 

    res.status(200).json(workout)
}


//get a single workout
const getWorkout =  async (req, res) => {
    const { id } = req.params

    if (!mogoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({error: 'No such workout'})  
    }
  
    const workout = await Workout.findById(id)

    if (!workout){
        return res.status(404).json({error: 'No such workout'})
    }

    res.status(200).json(workout)
}


//create new workout
const createWorkout = asyncHandler(async  (req, res) => {
    const {title, load, reps} = req.body

    //add doc to db
        const workout = await Workout.create({title, load, reps})
        res.status(200).json(workout)
        res.status(400).json({error: error.message})
    
})

 
//delete a workout
const deleteWorkout = async (req, res) => {
    const { id } = req.params

    if (!mogoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({error: 'No such workout'})  
    }

    const workout = await Workout.findOneAndDelete({_id: id})

    if (!workout){
        return res.status(404).json({error: 'No such workout'})
    }

    res.status(200).json(workout)

}


//update a workout

const updateWorkout = async (req, res) => {
    const { id } = req.params

    if (!mogoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({error: 'No such workout'})  
    }

    const workout = await Workout.findOneAndUpdate({_id: id}, {
        ...req.body
    })

    if (!workout){
        return res.status(404).json({error: 'No such workout'})
    }

    res.status(200).json(workout)
}



module.exports = {
    getWorkout,
    getWorkouts,
    createWorkout, 
    deleteWorkout,
    updateWorkout,
}