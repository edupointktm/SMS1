import React from 'react'
import SData from './StudentData'
import { Link } from 'react-router-dom'
function Student_details() {
  return (
    <>
      <div className="container-fluid">
        <h1> Student Details </h1>
        <div className="row bg-primary">
          <div className="col-1">SN</div>
          <div className="col-2">Name</div>
          <div className="col-1">Photo</div>

          <div className="col-4">Address</div>
          <div className="col-2">Moible</div>
          <div className="col-1">Details</div>
        </div>
        {SData.map((sd) =>
          <div className="row py-2 border-bottom">
            <div className="col-1">{sd.id}</div>
            <div className="col-2">{sd.names}</div>
            <div className="col-1"><img src={sd.image} width='50%' alt="" /></div>
            <div className="col-4">{sd.Address}</div>
            <div className="col-2">+977 {sd.Mobile_no}</div>
            <div className="col-1"><Link to={`/studentfulldetails/${sd.id}`}><i class="fa-solid fa-eye"></i></Link></div>
          </div>
        )}


      </div>

    </>
  )
}

export default Student_details