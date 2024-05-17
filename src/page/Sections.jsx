import React from 'react'
import Home from './Home'
import { Route, Routes } from 'react-router-dom'
import Contact from './Contact'
import About from './About'
import Page_no_found from './Page_no_found'
import Student_details from './Student_details'
import Student_full_details from './Student_full_details'


function Sections() {
  return (
   <>
    <Routes>
        <Route path = '/' element={<Home/>}/>
        <Route path = '/contact' element={<Contact/>}/>
        <Route path = '/about' element={<About/>}/>
        <Route path = '/studentdetails' element={<Student_details/>}/>
        <Route path = '/studentfulldetails/:sid' element={<Student_full_details/>}/>
        <Route path = '*' element={<Page_no_found/>}/>
    </Routes>


 
   </>
  )
}

export default Sections