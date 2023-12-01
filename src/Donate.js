import React from 'react'
import Sidebar from './Sidebar';
import Feed from './Feed';
import Widgets from './Widgets';
import './Dashboard.css';
// import './DonateBox';
import donate_banner from './Assets/donate_banner.jpg'
import './Donate.css'

const Donate = () => {
  return (
    <div className="app">
      {/* <h2>This is home</h2> */}
      {/* <Sidebar />, <DonateBox />, <Widgets /> */}
      <Sidebar />
      <div className="donate_box">
        {/* <h2>Support</h2> */}
        <img className='donatebanner' width={'820px'} height={'300px'} src={donate_banner} alt="" />


        <div class="cards">
        <article class="plan [ card ]">
    <div class="inner">

        <span class="pricing">
            <span>
                icon
                 {/* <small>/ m</small> */}
            </span>
        </span>
            <h2 class="title">Education and Training</h2>
        <p class="info">This plan is for those who have a team already and running a large business.</p>
        <ul class="features">
            <li class="li">
                <span class="icon">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
                        <path fill="none" d="M0 0h24v24H0z" />
                        <path d="M10 15.172l9.192-9.193 1.415 1.414L10 18l-6.364-6.364 1.414-1.414z" fill="currentColor" />
                    </svg>
                </span>
                <span><strong>Vocational Training</strong></span>
            </li>
            <li class="li">
                <span class="icon">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
                        <path fill="none" d="M0 0h24v24H0z" />
                        <path d="M10 15.172l9.192-9.193 1.415 1.414L10 18l-6.364-6.364 1.414-1.414z" fill="currentColor" />
                    </svg>
                </span>
                <span><strong>Advocate hiring</strong></span>
            </li>
            <li class="li">
                <span class="icon">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
                        <path fill="none" d="M0 0h24v24H0z" />
                        <path d="M10 15.172l9.192-9.193 1.415 1.414L10 18l-6.364-6.364 1.414-1.414z" fill="currentColor" />
                    </svg>
                </span>
                <span><strong>Make independent </strong></span>
            </li>
        </ul>
        <button class="dn_button">
            Choose plan
        </button>
    </div>
</article>

<article class="information [ card ]">
    <span class="tag">Healthcare</span>
    <h2 class="title">Empower Lives, Transform Tomorrow</h2>
    <p class="info"> With surgeries, treatments, and ongoing healthcare, you bring hope and healing to disabled individuals. Your generosity paves the way for brighter tomorrows. Join us in making a meaningful impact on the journey to wellness. </p>
    <button class="dn_button">
        <span>Learn more</span>
        <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="none">
            <path d="M0 0h24v24H0V0z" fill="none" />
            <path d="M16.01 11H4v2h12.01v3L20 12l-3.99-4v3z" fill="currentColor" />
        </svg>
    </button>
</article>
<article class="plan [ card ]">
    <div class="inner">

        <span class="pricing">
            <span>
                icon
                 {/* <small>/ m</small> */}
            </span>
        </span>
        <h2 class="title">Raise Scholarships</h2>
        <p class="info">Financial barriers can often hinder individuals with disabilities </p>
        <ul class="features">
            <li class="li">
                <span class="icon">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
                        <path fill="none" d="M0 0h24v24H0z" />
                        <path d="M10 15.172l9.192-9.193 1.415 1.414L10 18l-6.364-6.364 1.414-1.414z" fill="currentColor" />
                    </svg>
                </span>
                <span><strong>Empower Through Education</strong></span>
            </li>
            <li class="li">
                <span class="icon">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
                        <path fill="none" d="M0 0h24v24H0z" />
                        <path d="M10 15.172l9.192-9.193 1.415 1.414L10 18l-6.364-6.364 1.414-1.414z" fill="currentColor" />
                    </svg>
                </span>
                <span><strong>Enable Skills Acquisition</strong></span>
            </li>
            <li class="li">
                <span class="icon">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
                        <path fill="none" d="M0 0h24v24H0z" />
                        <path d="M10 15.172l9.192-9.193 1.415 1.414L10 18l-6.364-6.364 1.414-1.414z" fill="currentColor" />
                    </svg>
                </span>
                <span><strong>Break Barriers</strong></span>
            </li>
        </ul>
        <button class="dn_button">
            Choose plan
        </button>
    </div>
</article>
{/* <article class="information [ card ]">
    <h2 class="title">The only tool you need to schedule your day</h2>
    <p class="info">Always keep updated with this simple tool on the go, when and where ever you need.</p>
    <dl class="details dl">
        <div>
            <dt class="dt">Satisfaction</dt>
            <dd class="dd">100%</dd>
        </div>
        <div>
            <dt>Customers</dt>
            <dd>4.5K</dd>
        </div>
    </dl>
</article> */}
</div>

      </div>
      <Widgets/>
    </div>
  )
}

export default Donate
