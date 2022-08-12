import { NavLink } from "react-router-dom"
import myimage from '../Components/icons/circle-minus-solid.svg'
import './CSS/WorkoutDetails.css'

const WorkoutDetails = ({ workout,deleteWorkOuts }) => {
    return(
        <div className="workout-details">
            <img src={myimage} alt="delte-button" onClick={()=>deleteWorkOuts(workout._id)} />
            <h4>{workout.title}</h4>
            <p><strong>Load (kg): </strong>{workout.load}</p>
            <p><strong>Reps: </strong>{workout.reps}</p>
            <p>{workout.createdAt}</p>
            <NavLink to={`/${workout._id}`}><button>More details</button></NavLink>

           
        </div>
    )
}

export default WorkoutDetails