import React, { useEffect, useState } from 'react'
import './AppointmentDataBox.css'
import { getAppointment } from '../Firebase/CRUDOperations'

const AppointmentDataBox = ({ name }) => {

  const [patientData, setPatientData] = useState([]);

  useEffect(() => {
    const initialFetch = () => {
      getAppointment()
        .then((data) => {
          setPatientData(data);
        })
        .catch(error => console.log(error));

    }

    initialFetch();
  }, []);

  return (
    <div className='data-box'>
      {name}
      <div className="data">
        <div className="heading">
          <div className="fullName">Full Name</div>
          <div className="date">Date</div>
          <div className="status">Status</div>
        </div>
        <div className="data">
          {
            patientData.map((patientData, index) => {
              return (
                <div key={index} className='heading'>
                  <div className="fullName">
                    {patientData['firstName']} {patientData['lastName']}
                  </div>
                  <div className="date">
                  {patientData['appointmentDate']}
                </div>
                  <div className='status'>
                    {patientData['status']}
                  </div>
                </div>
              )
            })
          }
        </div>
      </div>
    </div>
  )
}

export default AppointmentDataBox
