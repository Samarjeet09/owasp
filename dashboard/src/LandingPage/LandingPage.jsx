import React from 'react'
import './LandingPage.css'
import SlideCardComponent from './SlideCardComponent'
import Footer from './Footer'
export default function LandingPage() {
    return (
        <div className='landingPageBackground'>
            <div id="landingPageNavbar">
                <div className='logoWithName'>
                    <img src="src/assets/logo.png" alt="" />
                    <span>NirogSampada</span>
                </div>
            </div>
            <div className="generalInfo">
                <div className="generalInfoLeft">
                    <h1 className='heading'>
                        Your Journey To Wellness Starts Here
                    </h1>
                    <span className='paragraph'>
                        Lorem Media is a full-service social media agency. We offer businesses innovative solutions that deliver the right type of audience to you in the most effective strategies possible. We strive to develop a community around your business, polishing your branding, and improving your public relations.
                    </span>
                    <div className='authOptions'>
                        <div className="authButton">
                            GET STARTED
                        </div>
                        <div className="authButton">
                            ALREADY HAVE AN ACCOUNT?
                        </div>
                    </div>
                </div>
                <div className="generalInfoRight">
                    <div className="characters">
                        <div className="character1">

                        </div>
                        <div className="character2">

                        </div>
                    </div>
                </div>
            </div>
            <div className="whoWeAre">
                <div className="leftBlock">

                </div>
                <div className="rightBlock">
                    <h1 className="heading">
                        Who we are?
                    </h1>
                    <div className="paragraph">
                        Lorem Media is a full-service social media agency. We offer businesses innovative solutions that deliver the right type of audience to you in the most effective strategies possible. We strive to develop a community around your business, polishing your branding, and improving your public relations.
                        Social Media is now one of the most powerful marketing tools with the ability to communicate with a target audience in real time.

                        It's 2019: time to sink or swim.

                        We are your Social Media Marketing Agency.
                    </div>
                    <div className="moreInfoBtn">
                        See More
                    </div>
                </div>
            </div>
            <div className="slideCardBox">
                <h1>Get Rid of</h1>
                <div className="slideCard">
                    {<SlideCardComponent image='src/assets/LandingPage/doctorPatient.png' text="addiction" />}
                    {<SlideCardComponent image='src/assets/LandingPage/doctorPatient.png' text="addiction" />}
                    {<SlideCardComponent image='src/assets/LandingPage/doctorPatient.png' text="addiction" />}
                    {<SlideCardComponent image='src/assets/LandingPage/doctorPatient.png' text="addiction" />}
                </div>
            </div>
            {<Footer/>}
        </div>
    )
}
