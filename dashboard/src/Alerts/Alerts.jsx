import React from 'react'
import DataBox from '../DataBox/DataBox'
import './Alerts.css'

const Alerts = () => {
    return (
        <div>
            <div className='databox'>
                <DataBox name={'Patient Out'} />
                {/* <DataBox name={'Appointments'} /> */}
            </div>
        </div>
    )
}

export default Alerts
