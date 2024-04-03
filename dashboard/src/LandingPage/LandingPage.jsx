import React from 'react'
import './LandingPage.css'
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
                    <span className='heading'>
                        Your Journey To Wellness Starts Here
                    </span>
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
        </div>
    )
}
