import React from 'react'
import { useParams } from 'react-router-dom'
import SData from './StudentData'

function Student_full_details() {
var {sid}=useParams()
var getStudent = SData.find((sd)=>sd.id==sid)

  return (
    <>
    <h1> Student Full Detials : {sid}</h1>
    <div className="container">
        <div className="row">
            <div className="col-2">
                <img src={getStudent.image} alt="" />
            </div>
            <div className="col">
                <h3> Name :{getStudent.names} </h3> 
            </div>
        </div>
    </div>
    </>
  )
}

export default Student_full_details