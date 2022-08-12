import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { useParams } from 'react-router-dom'
import logo from '../Components/icons/loading.gif'
import './CSS/SingleWorkout.css'

const SingleWorkout = () => {
    const [data,setData] = useState([])
    const [pending ,setPending] = useState(false)
    const {id} =useParams()

    
    
    

    const getOneData = async () => {

        setPending(true)

        try{
            const responce = await fetch('/api/workouts/'+ id)
            const json = await responce.json()
            if (responce.ok) {
                setData(json)
                setPending(false)
            }
        }
        catch(err){
            setPending(false)
            console.log(err)
        }
       
    }

    useEffect(()=>{
        getOneData()
    },[])
  return (
    <div>
    {pending && <div className="cover"><img src={logo} alt="loading..." className="loader" /></div>}
        <div>
            <div className='M-single-style'>
            <h1>{data.title}</h1>
            <p><strong>Load (kg): </strong>{data.load}</p>
            <p><strong>Reps: </strong>{data.reps}</p>
            <p><strong>Time Created: </strong>{data.createdAt}</p>
            </div>
        </div>
    
    </div>
  )
}

export default SingleWorkout