import { useState } from "react"
import axios from 'axios'
import './CSS/WorkoutForm.css'

const WorkoutForm = ({fetchWorkouts}) => {
    const [title, setTitle] = useState('')
    const [load, setLoad] = useState('')
    const [reps, setReps] = useState('')
    const [error, setError] = useState(null)

    const handleSubmit = async (e) => {
        e.preventDefault()

        const workout= {title, load, reps}

        // const responce = await fetch ('/api/workouts',{
        //     method: 'POST',
        //     body: JSON.stringify(workout),
        //     headers: {
        //         'Content-Type': 'application/json'
        //     }
        // })
        // const json = await responce.json()
        try{
            const response = await axios.post('/api/workouts' , workout)
            if(response){
                fetchWorkouts()
                setError('')
                setTitle('')
                setReps('')
                setLoad('')
            }
        }catch{
            setError('couldnt post this data')
        }
       

        // if (!responce.ok){
        //     setError(json.error)
        // }

        // if (responce.ok){
        //     setTitle('')
        //     setLoad('')
        //     setReps('')
        //     setError(null)
        //     console.log('New Workout Added', json)
        //     fetchWorkouts()
        // }
    }

    return (
        <form className="create" onSubmit={handleSubmit}>
            <h3>Add a New Workout</h3>

            <label>Excercise Title:</label>
            <input
              type="text"
              onChange={(e) =>  setTitle(e.target.value)}
              value={title}
             />

            <label>Load (in kg):</label>
            <input
              type="number"
              onChange={(e) =>  setLoad(e.target.value)}
              value={load}
             />

            <label>Reps:</label>
            <input
              type="number"
              onChange={(e) =>  setReps(e.target.value)}
              value={reps}
             />

             <button>Add Workouts</button>
             {error && <div className="error">{error}</div>}
        </form>
    )
}

export default WorkoutForm