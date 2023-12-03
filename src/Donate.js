import React from 'react'
import Sidebar from './Sidebar';
import Feed from './Feed';
import Widgets from './Widgets';
import './Dashboard.css';
// import './DonateBox';
import donate_banner from './Assets/donate_banner.jpg'
import './Donate.css'
import scholarship_icon from './Assets/scholarship_icon.png'
import education_logo from './Assets/education_logo.png'
import BeyondBarriers from './Assets/BeyondBarriers.png'

const Donate = () => {


    const phonePrice = 67999;
    const laptopPrice = 5000;
    var formatter = new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "INR",
  
      // These options are needed to round to whole numbers if that's what you want.
      minimumFractionDigits: 0, // (this suffices for whole numbers, but will print 2500.10 as $2,500.1)
      //maximumFractionDigits: 0, // (causes 2500.99 to be printed as $2,501)
    });
  
    const loadScript = (src) => {
      return new Promise((resovle) => {
        const script = document.createElement("script");
        script.src = src;
  
        script.onload = () => {
          resovle(true);
        };
  
        script.onerror = () => {
          resovle(false);
        };
  
        document.body.appendChild(script);
      });
    };
  
    const displayRazorpay = async (amount) => {
      const res = await loadScript(
        "https://checkout.razorpay.com/v1/checkout.js"
      );
  
      if (!res) {
        alert("You are offline... Failed to load Razorpay SDK");
        return;
      }
  
      const options = {
        key: "rzp_test_VdGdvprTKB8u1w",
        currency: "INR",
        amount: amount * 100,
        name: "Capabilix",
        description: "Thanks for purchasing",
        image:{BeyondBarriers},
  
        handler: function (response) {
          alert(response.razorpay_payment_id);
          alert("Payment Successfully");
        },
        prefill: {
          name: "code with akky",
        },
      };
  
      const paymentObject = new window.Razorpay(options);
      paymentObject.open();
    };




    
    return (
        <div className="app">
            {/* <h2>This is home</h2> */}
            {/* <Sidebar />, <DonateBox />, <Widgets /> */}
            <Sidebar />
            <div className="donate_box">

            {/* <button onClick={()=>displayRazorpay(laptopPrice)}>Pay</button> */}

            {/* <img className='donatebanner' width={'820px'} height={'350px'} src={donate_banner} alt="" /> */}


            <div class="container">
  <h1 class="title">Donate</h1>
  <h1 class="title title-large">Donate</h1>
  <div id="img-1" class="img-container">   
    <img class="img" src={"https://assets-global.website-files.com/63804561992fec607543f6d0/644a3675f3756f74bad835e9_Frame-2.png"}/>
  </div>
  
  {/* <div class="img-container second-animation">    
    <img class="img" src={"https://wallpapershome.com/images/pages/pic_v/13886.jpg"}/>
  </div> */}
  
  <div class="img-container third-animation">    
    <img class="img" src={"https://assets-global.website-files.com/63804561992fec607543f6d0/63d9cee2f1e5b9cc7415c707_Ganga%20color%20(home%20page).png"}/>
  </div>
  
  <div class="img-container fourth-animation">    
    <img class="img nba" src={"https://assets-global.website-files.com/63804561992fec607543f6d0/63eba6f7c2eaacf52c8fd46f_Frame.png"}/>
  </div>

  <div class="img-container fifth-animation">    
    <img class="img" src={"https://assets-global.website-files.com/63804561992fec607543f6d0/644a3674bcbc64e39d8707d9_Frame.png"}/>
  </div>  
  
  {/* <div id="img-6" class="img-container sixth-animation">    
    <img class="img" src={"http://orig15.deviantart.net/3c71/f/2016/121/9/4/reaper_wallpaper__overwatch__by_prollgurke-da0wf9m.png"}/>
  </div>   */}
    
  <div id="img-7" class="img-container seventh-animation">    
    <img class="img" src={"https://assets-global.website-files.com/63804561992fec607543f6d0/63d9cee0d4e24a161bef06ae_Sudha%20color%20(home%20page).png"}/>
  </div>
</div>



                



<div className="outer-wrapper">
                <h1 className="heading">How much impact will you create today?</h1>





                <div  class="inner-wrapper-hero sad"><div class="payemnt-wrapper"><div data-w-id="2d335d07-5ffe-574b-2c97-328d886917e2" class="text-block-2">Choose Your Donation Amount</div><div class="div-block-6"><div data-w-id="2d335d07-5ffe-574b-2c97-328d886917e5" class="div-block-4 amounts" style={{ opacity: 1, transform: 'translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)', transformStyle: 'preserve-3d' }}>500</div><div data-w-id="2d335d07-5ffe-574b-2c97-328d886917e7" class="div-block-4 amounts" style={{ opacity: 1, transform: 'translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)', transformStyle: 'preserve-3d' }}>1000</div><div data-w-id="2d335d07-5ffe-574b-2c97-328d886917e9" class="div-block-4 amounts" style={{ opacity: 1, transform: 'translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)', transformStyle: 'preserve-3d' }}>5000</div></div><div class="div-block-6"><div data-w-id="2d335d07-5ffe-574b-2c97-328d886917ec" class="div-block-4 amounts" style={{ opacity: 1, transform: 'translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)', transformStyle: 'preserve-3d' }}>10000</div><div data-w-id="2d335d07-5ffe-574b-2c97-328d886917ee" class="div-block-4 amounts other" style={{ opacity: 1, transform: 'translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)', transformStyle: 'preserve-3d' }}>OTHER AMOUNT</div></div><div class="div-block-6"><div onClick={()=>displayRazorpay(laptopPrice)} data-w-id="2d335d07-5ffe-574b-2c97-328d886917f1" class="div-block-4 amounts other button saf" style={{ opacity: 1, transform: 'translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)', transformStyle: 'preserve-3d' }}>MAKE A DIFFERENCE NOW!</div></div></div></div>
<div style={{display:'flex', gap:'0.5rem'}}> <p style={{fontWeight:'600'}}>Secured By</p><img width={'100px'} src="https://upload.wikimedia.org/wikipedia/commons/8/89/Razorpay_logo.svg" alt="" /></div>
                </div> 




{/* 
             
            */}
               
               

                

            </div>



            {/* <Widgets /> */}

            <div className="widgets">
    

    <div className="widgets__widgetContainer">


      <div class="cards">
                    <article class="plan [ card ]">
                        <div class="inner">

                            <span class="pricing">
                                <span>
                                    <img width={'20px'} height={'20px'} src={education_logo} alt="" />
                                </span>
                            </span>
                            <h2 class="c-title">Education and Training</h2>
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
                          
                        </div>
                    </article>

                
                    <article class="plan [ card ]">
                        <div class="inner">

                            <span class="pricing">
                                <span>

                                    <img width={'20px'} height={'20px'} src={scholarship_icon} alt="" />


                                </span>
                            </span>
                            <h2 class="c-title">Raise Scholarships</h2>
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
                            
                        </div>
                    </article>
                    
                </div>








      
    </div>
  </div>

















        </div>
    )
}

export default Donate
