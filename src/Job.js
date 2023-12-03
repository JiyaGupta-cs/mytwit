import React from 'react'
import './Job.css'
// import './Post.css'

const Job = ({displayName, userName, verified, text, image, avatar,salary,location,type,title}) => {
    return (
        <div className='jobpage'>
            {/* <div className="post_avatar">
                <img src={avatar} alt="" />
            </div>
            <div className="post_body">
                <div className="post_header">
                    <div className="post_headerText">
                        <h3>
                            {displayName}
                        </h3>
                    </div>
                    <div className="post_headerDescription">
                        <p>{text}</p>
                    </div>
                </div>
                
                <img src={image} alt="" />
                <div className="post_footer">
                    <img width={'30px'} src="data:image/png;base64,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" alt="" />
                    <img width={'30px'} src="https://static.vecteezy.com/system/resources/thumbnails/000/284/988/small/a19.jpg" alt="" />
                    <img width={'30px'} src="https://static.vecteezy.com/system/resources/previews/014/455/886/original/share-icon-on-transparent-background-free-png.png" alt="" />
                    <img width={'30px'} src="https://cdn-icons-png.flaticon.com/512/786/786352.png" alt="" />

                </div>

                <div className="job_location">
                        <p>{location}</p>
                    </div>
                    <div className="job_salary">
                        <p>{salary}</p>
                    </div>

            </div> */}









            <div class="main">
  <ul class="mycards">
    <li class="mycards_item">
      <div class="mycard">
        <div class="mycard_image">
          <img src={image} alt="mixed vegetable salad in a mason jar." />

          <span class="mycard_price"><span>$</span>9</span>
          <span class="mycard_price"><div className="job_employer">
                <img className="job_avatar" src={avatar} alt="" />
            <p className='employer'><strong>{userName}</strong></p>
            </div></span>

        </div>
        <div class="mycard_content">
{/* 
        <div className="job_employer">
                <img className="job_avatar" src={avatar} alt="" />
            <p className='employer'><strong>{userName}</strong></p>
            </div> */}

          <div class="mycard_text">
            <p>{text}</p>
            {/* <hr /> */}
            
          </div>

<div className="boxes">
    <div className="box">    
        <p className="box_heading">Title</p>    
     <p className="box_content">{title}</p>
    </div>    
    <div className="box">    
        <p className="box_heading">Location</p>    
     <p className="box_content">{location}</p>
    </div>   
</div>
<div className="boxes">
    <div className="box">    
        <p className="box_heading">Salary</p>    
     <p className="box_content">{salary}</p>
    </div>    
    <div className="box">    
        <p className="box_heading">Type</p>    
     <p className="box_content">{type}</p>
    </div>   
</div>

        </div>
      </div>
    </li>

    {/* <li class="mycards_item">
      <div class="mycard">
        <div class="mycard_image">
          <img src="https://assets.codepen.io/652/photo-1520174691701-bc555a3404ca.jpeg" alt="a Reuben sandwich on wax paper." />
          <span class="mycard_price"><span>$</span>18</span>
        </div>
        <div class="mycard_content">
          <h2 class="mycard_title">Ultimate Reuben</h2>
          <div class="mycard_text">
            <p>All great meals take time, but this one takes it to the next level! More than 650 hours
              of fermenting, brining, aging, and curing goes into each and every one of our legendary
              Reuben sandwiches.
            </p>
            <p>Every element of this extraordinary sandwich is handcrafted in our kitchens, from the rye
              bread baked from our secret recipe to the cave-aged Swiss cheese, right down to the
              pickle. The only thing we didn't make on the premises is the toothpick ( but we're
              looking into how to do that).
            </p>
            <hr />
            <p>This unforgettable sandwich has all of the classic Reuben elements: <strong>corned beef</strong>, <strong>rye
                bread</strong>, <strong>creamy Russian dressing</strong>, <strong>sauerkraut</strong>, plus a <strong>sweet gherkin pickle</strong>.
              No substitions please!
            </p>
            <p>Add a side of <strong>french fries</strong> or <strong>sweet potato fries</strong> for $2 more, or our
              <strong>housemade pub chips</strong> for $1.
            </p>
          </div>

            <div className="threeboxes">
                <div className="box_heading">
                    <p>TYPE</p>
                </div>
                <div className="box_content">
                    <p>Sitiing</p>
                </div>
            </div>

        </div>
      </div>
    </li> */}

    {/* <li class="mycards_item">
      <div class="mycard">
        <div class="mycard_image">
          <span class="note">Seasonal</span>
          <img src="https://assets.codepen.io/652/photo-1544510808-91bcbee1df55.jpeg" alt="A side view of a plate of figs and berries." />
          <span class="mycard_price"><span>$</span>16</span>
        </div>
        <div class="mycard_content">
          <h2 class="mycard_title">Fig &amp; Berry Plate</h2>
          <div class="mycard_text">
            <p>A succulent sextet of fresh figs join with a selection of bodacious seasonal berries in
              this refreshing, shareable dessert.
            </p>
            <hr />
            <p>Choose your drizzle: <strong>cherry-balsamic vinegar</strong>, <strong>local honey</strong>, or
              <strong>housemade chocolate sauce</strong>.
            </p>
          </div>
        </div>
      </div>
    </li> */}
  </ul>
</div>









            
        </div>
    )
}

export default Job
