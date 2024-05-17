import React from 'react'
import Data from './Data'

function Home() {
  return (
    <>
    <section id="our-team">
  <div className="container">
    
    <div className="content">At variations of passages of Lorem Ipsum available, but the majority have suffered
      alteration..</div>
    <div className="row">
      {Data.map((d)=>
      <div className="col-sm-3">
        <div className="card">
          <div className="image"><img src={d.img} alt /></div>
          <div className="title">{d.names}</div>
          <div className="sub-title">{d.post}</div>
          <div className="social-media">
            <i className="fa-brands fa-facebook" />
            <i className="fa fa-google-plus" />
            <i className="fa fa-twitter" />
          </div>
        </div>
      </div>
    
  )}
      
    </div>
  </div>
</section>

    </>
  )
}

export default Home