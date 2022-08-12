import axios from "axios"
import { useEffect, useState } from "react"
import logo from '../Components/icons/loading.gif'
import './Home.css'


//components
import WorkoutDetails from '../Components/WorkoutDetails'
import WorkoutForm from "../Components/WorkoutForm"

const Home = () => {
    const  [workouts, setWorkouts] = useState(null)

    const [pending ,setPending] = useState(false)


    const deleteWorkOuts = async(id)=>{
       const res = await axios.delete('/api/workouts/'+ id)
       if(res){
        fetchWorkouts()
       }
    }

    const fetchWorkouts = async () => {

        setPending(true)

        try{
            const responce = await fetch('/api/workouts')
            const json = await responce.json()
            if (responce.ok) {
                setWorkouts(json)
                setPending(false)
            }
        }
        catch(err){
            setPending(false)
            console.log(err)
        }
       
    }
    useEffect(() => {
        fetchWorkouts()
    }, [])


    

    return (
        <div className="">

{pending && <div className="cover"><img src={logo} alt="loading..." className="loader" /></div>} 
            <div className="home">
          
            <>
            <div className="workouts">
            {workouts && workouts.map((workout) => (
                <WorkoutDetails key={workout._id} workout={workout} deleteWorkOuts={deleteWorkOuts} />
            ))}
           </div>
           <WorkoutForm fetchWorkouts={fetchWorkouts} />
           </>
            
           
        </div>
        </div>
    )
}

export default Home