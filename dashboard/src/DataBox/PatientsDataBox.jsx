import React, { useEffect, useState } from 'react'
import { getAllPatients } from '../Firebase/CRUDOperations';
import './PatientsDataBox.css'
export default function PatientsDataBox({ name }) {

    const [patients, setPatients] = useState([]);

    useEffect(() => {
        const initialFetch = () => {
            getAllPatients()
                .then((data) => {
                    setPatients(data);
                })
                .catch(error => console.log(error));
        }
        initialFetch();
    }, []);

    return (
        <div className='patientsDataBox'>
            {name}
            <ol className="data">
                {
                    patients.map((patientData, index) => {
                        return (
                            <li key={index}>
                                {patientData['name']} - {patientData['id']}
                            </li>
                        )
                    })
                }
            </ol>

        </div>
    )
}
