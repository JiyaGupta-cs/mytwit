import React from 'react'
import Sidebar from './Sidebar'
import sidebanner from './Assets/sidebanner.png'
import GoToTopButton from './GoToTopButton'
const Event = () => {
  return (
    <div className='app'>
      {/* <h1>Events</h1> */}      
      <Sidebar/>

      <div className="feed">
      <div className="feed_header">
      <h2 className='dec-h' style={{marginLeft: "70px"}}>Events Calendar</h2>
      </div>

      <div style={{marginTop:'0.5rem', marginLeft:'0.8rem', marginRight:'0.8rem'}} className="mycalendar">
      <iframe src="https://calendar.google.com/calendar/embed?height=600&wkst=1&bgcolor=%23dbecfa&ctz=UTC&showTitle=0&showTz=1&showPrint=0&src=M2YwNjVkN2IzY2Y5Y2Q2M2JlYTFmZTc0ODAzZDAxZjY1OGNiNWNjOTY3MDIwNmZmYWU2ZGVlOTc2YzMzZjI5ZkBncm91cC5jYWxlbmRhci5nb29nbGUuY29t&src=ZW4uaW5kaWFuI2hvbGlkYXlAZ3JvdXAudi5jYWxlbmRhci5nb29nbGUuY29t&color=%23F6BF26&color=%230B8043" style={{"border-width":0}} width="800" height="600" frameborder="0" scrolling="no"></iframe>
        </div>  
        </div>
        <div className="side_banner">
        <h2 className='dec-h'>Embrace your strength, defy the odds. You're unstoppable</h2>
        <figure>
          <img src={sidebanner} alt="" />
        </figure>
      </div>
      <GoToTopButton/>
    </div>
  )
}

export default Event
