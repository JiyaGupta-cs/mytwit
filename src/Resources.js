import React from 'react'
import Sidebar from './Sidebar'
import './Resources.css'
import sidebanner from './Assets/sidebanner.png'
import { toBePartiallyChecked } from '@testing-library/jest-dom/matchers'
import linkimg from './Assets/linkimg.png'

const Resources = () => {
  return (
    <div className='r-app'>
      <Sidebar />

<div className="resources">
  <h1 className='dec-h1'>Resources</h1>







  <div class="r-cards">
                    <article class="plan [ r-card ]">
                        <div class="r-inner">

                            <span class="pricing">
                                <span>
                                    <img width={'20px'} height={'20px'} src={linkimg} alt="" />
                                </span>
                            </span>
                            <h2 class="c-title">Right Of Persons With Disability Act</h2>
                            {/* <p class="info">The Disabilities Act ensures equal rights for individuals with disabilities in education and employment.</p> */}
                            <a href="https://thenationaltrust.gov.in/content/" target='_blank'>
                             <button class="dn_button">
                                Click to View
                            </button> </a>
                        </div>
                    </article>
                    <article class="plan [ r-card ]">
                        <div class="r-inner bg-white">

                            <span class="pricing">
                                <span>
                                    <img width={'20px'} height={'20px'} src={linkimg} alt="" />
                                </span>
                            </span>
                            <h2 class="c-title">Right To Education Act 2009</h2>
                            {/* <p class="info">The Disabilities Act ensures equal rights for individuals with disabilities in education and employment.</p> */}
                             <button class="dn_button">
                                Click to View
                            </button> 
                        </div>
                    </article>
                    <article class="plan [ r-card ]">
                        <div class="r-inner">

                            <span class="pricing">
                                <span>
                                    <img width={'20px'} height={'20px'} src={linkimg} alt="" />
                                </span>
                            </span>
                            <h2 class="c-title">National Trust Act 1999</h2>
                            {/* <p class="info">The Disabilities Act ensures equal rights for individuals with disabilities in education and employment.</p> */}
                            <a href="https://thenationaltrust.gov.in/content/" target='_blank'>
                             <button class="dn_button">
                                Click to View
                            </button> </a>
                        </div>
                    </article>
                    <article class="plan [ r-card ]">
                        <div class="r-inner bg-white">

                            <span class="pricing">
                                <span>
                                    <img width={'20px'} height={'20px'} src={linkimg} alt="" />
                                </span>
                            </span>
                            <h2 class="c-title">Mental Health Act 2017</h2>
                            {/* <p class="info">The Disabilities Act ensures equal rights for individuals with disabilities in education and employment.</p> */}
                             
                             <a href="https://nhm.gov.in/" target='_blank'>
                             <button class="dn_button">
                                Click to View
                            </button> </a>
                        </div>
                    </article>
                    <article class="plan [ r-card ]">
                        <div class="r-inner">

                            <span class="pricing">
                                <span>
                                    <img width={'20px'} height={'20px'} src={linkimg} alt="" />
                                </span>
                            </span>
                            <h2 class="c-title">Rehabilitation Council 1992</h2>
                            {/* <p class="info">The Disabilities Act ensures equal rights for individuals with disabilities in education and employment.</p> */}
                            <a href="https://rehabcouncil.nic.in/" target='_blank'>
                             <button class="dn_button">
                                Click to View
                            </button> </a>
                        </div>
                    </article>
                    <article class="plan [ r-card ]">
                        <div class="r-inner  bg-white">

                            <span class="pricing">
                                <span>
                                    <img width={'20px'} height={'20px'} src={linkimg} alt="" />
                                </span>
                            </span>
                            <h2 class="c-title">Govt. Circulars On Disability</h2>
                            {/* <p class="info">The Disabilities Act ensures equal rights for individuals with disabilities in education and employment.</p> */}
                            <a href="https://drive.google.com/drive/folders/1DKdPhbxjknH0crjfhgwSasOCCxZ0b3Dg" target='_blank'>
                             <button class="dn_button">
                                Click to View
                            </button> </a>
                        </div>
                    </article>
                    <article class="plan [ r-card ]">
                        <div class="r-inner">

                            <span class="pricing">
                                <span>
                                    <img width={'20px'} height={'20px'} src={linkimg} alt="" />
                                </span>
                            </span>
                            <h2 class="c-title">UN Convention On Rights Of Child</h2>
                            {/* <p class="info">The Disabilities Act ensures equal rights for individuals with disabilities in education and employment.</p> */}
                            <a href="https://www.unicef.org/child-rights-convention" target='_blank'>
                             <button class="dn_button">
                                Click to View
                            </button> </a>
                        </div>
                    </article>
                    <article class="plan [ r-card ]">
                        <div class="r-inner bg-white">

                            <span class="pricing">
                                <span>
                                    <img width={'20px'} height={'20px'} src={linkimg} alt="" />
                                </span>
                            </span>
                            <h2 class="c-title">Right To Education Act 2009</h2>
                            {/* <p class="info">The Disabilities Act ensures equal rights for individuals with disabilities in education and employment.</p> */}
                            <a href="https://www.unicef.org/child-rights-convention" target='_blank'>
                             <button class="dn_button">
                                Click to View
                            </button> </a>
                        </div>
                    </article>
                    <article class="plan [ r-card ]">
                        <div class="r-inner">

                            <span class="pricing">
                                <span>
                                    <img width={'20px'} height={'20px'} src={linkimg} alt="" />
                                </span>
                            </span>
                            <h2 class="c-title">Compliance Documents</h2>
                            {/* <p class="info">The Disabilities Act ensures equal rights for individuals with disabilities in education and employment.</p> */}
                            <a href="https://drive.google.com/file/d/13kt4xe-R1S0N-Uf0r8IzdChKnBYLk3BX/view" target='_blank'>
                             <button class="dn_button">
                                Click to View
                            </button> </a>
                        </div>
                    </article>
                    
 
                </div>
                







</div>
      <div className="side_banner">
        <h2 className='dec-h'>Embrace your strength, defy the odds. You're unstoppable</h2>
        <figure>
          <img src={sidebanner} alt="" />
        </figure>
      </div>
    </div>
  )
}

export default Resources
