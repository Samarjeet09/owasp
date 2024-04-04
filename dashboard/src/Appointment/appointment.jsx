import React, { useState } from 'react'
import './appointment.css'
export default function AppointmentPage() {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        mobileNumber: '',
        dateOfBirth: '',
        gender: '',
        appointmentDate: '',
        appointmentTime: '',
        departmentName: '',
        doctorName: '',
        query: '',
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formData);
        setFormData({
            firstName: '',
            lastName: '',
            email: '',
            mobileNumber: '',
            dateOfBirth: '',
            gender: '',
            appointmentDate: '',
            appointmentTime: '',
            departmentName: '',
            doctorName: '',
            query: '',
        });
    };
    return (
        <div className='landingPageBackground'>
            <div id="landingPageNavbar">
                <img src="src/assets/logo.png" alt="" />
                <span>NirogSampada</span>
            </div> 
            <div className='generalInfo'>
                <div className='generalInfoLeft'>
                    <h1 className='heading'>
                        Book Your Appointment Now!
                    </h1>
                    <span className='paragraph'>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum facilis cumque beatae. Odit labore dolor ab recusandae! Repudiandae libero tempore, rerum laudantium eveniet consequatur hic itaque, animi maiores, expedita vitae.
                    </span>
                    <div className='fill'>
                        Book Now!
                    </div>
                </div>
                <div className='generalInfoRight'>
                    <div className='characters'>
                        <span className='character1'>
                            <div className='character2'>

                            </div>
                        </span>

                    </div>
                </div>

            </div>
            <div className='rehabForm'>
                <h1 className='heading'>
                    Rehab Name
                    
                </h1>
                <div className='main_form'>
                    <form onSubmit={handleSubmit}>
                        <div className='row'>
                        <div className='labell'>
                        <label>
                            First Name
                            <br></br>
                            <input
                                type="text"
                                name="firstName"
                                value={formData.firstName}
                                onChange={handleInputChange}
                            />
                        </label>
                        </div>
                        <div className='labell'>
                        <label>
                            Last Name:
                            <br></br>
                            <input
                                type="text"
                                name="lastName"
                                value={formData.lastName}
                                onChange={handleInputChange}
                            />
                        </label>
                        </div>
                        </div>
                        <div className='row'>
                        <div className='labell'>
                        <label>
                            Email:
                            <br></br>
                            <input
                                type="email"
                                name="email"
                                value={formData.email}
                                onChange={handleInputChange}
                            />
                        </label>
                        </div>
                        <div className='labell'>
                        <label>
                            Mobile Number:
                            <br></br>
                            <input
                                type="tel"
                                name="mobileNumber"
                                value={formData.mobileNumber}
                                onChange={handleInputChange}
                            />
                        </label>
                        </div>
                        </div>
                        <div className='row'>
                        <div className='labell'>
                        <label>
                            Date of Birth:
                            <br></br>
                            <input
                                type="date"
                                name="dateOfBirth"
                                value={formData.dateOfBirth}
                                onChange={handleInputChange}
                            />
                        </label>
                        </div>
                        <div className='labell'>
                        <label>
                            Gender:
                            <br></br>
                            <select
                                name="gender"
                                value={formData.gender}
                                onChange={handleInputChange}
                            >
                                <option value="">Select</option>
                                <option value="male">Male</option>
                                <option value="female">Female</option>
                                <option value="other">Other</option>
                            </select>
                        </label>
                        </div>
                        </div>
                        <div className='row'>
                        <div className='labell'>
                        <label>
                            Appointment Date:
                            <br></br>
                            <input
                                type="date"
                                name="appointmentDate"
                                value={formData.appointmentDate}
                                onChange={handleInputChange}
                            />
                        </label>
                        </div>
                        <div className='labell'>
                        <label>
                            Appointment Time:
                            <br></br>
                            <input
                                type="time"
                                name="appointmentTime"
                                value={formData.appointmentTime}
                                onChange={handleInputChange}
                            />
                        </label>
                        </div>
                        </div>
                        <div className='row'>
                        <div className='labell'>
                        <label>
                            Department Name:
                            <br></br>
                            <input
                                type="text"
                                name="departmentName"
                                value={formData.departmentName}
                                onChange={handleInputChange}
                            />
                        </label>
                        </div>
                        <div className='labell'>
                        <label>
                            Doctor Name:
                            <br></br>
                            <input
                                type="text"
                                name="doctorName"
                                value={formData.doctorName}
                                onChange={handleInputChange}
                            />
                        </label>
                        </div>
                        </div>
                        <div className='row'>
                        <div className='labell'>
                        <label>
                            Query:
                            <br></br>
                            <textarea
                                name="query"
                                value={formData.query}
                                onChange={handleInputChange}
                            ></textarea>
                        </label>
                        <div className='bt'>
                        <button type="submit">Submit</button>
                        </div>
                        </div>
                        </div>
                        
                        
                        
                    </form>
                </div>
            </div>

        </div>
    )
}
