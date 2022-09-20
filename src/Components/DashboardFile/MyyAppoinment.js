import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const MyyAppoinment = () => {
    const [myAppointment, setMyAppointment] = useState([]);
    const [user] = useAuthState(auth);

    useEffect(() => {
        if (user) {
            fetch(`http://localhost:5000/booking?email=${user.email}`)
                .then(res => res.json())
                .then(data => setMyAppointment(data))
        }
    }, [user])

    return (
        <div>
            <h2 className='text-purple-500 pb-2 font-bold mt-4'>My All Appointments Is Here</h2>
            {/* <h2>{myAppointment.serviceName}</h2> */}
            <div className="overflow-auto rounded-lg shadow">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th className=' text-xs md:text-md lg:text-base '>No</th>
                            <th className=' text-xs md:text-md lg:text-base '>Service Name</th>
                            <th className=' text-xs md:text-md lg:text-base '>patient Name</th>
                            <th className=' text-xs md:text-md lg:text-base '>Time</th>
                            <th className=' text-xs md:text-md lg:text-base '>Date</th>
                        </tr>
                    </thead>

                    <tbody>

                        {
                            myAppointment.map((appointment, index) => <tr key={index}>

                                <th className=' text-xs md:text-md lg:text-base ' >{index + 1}</th>
                                <td className=' text-xs md:text-md lg:text-base ' >{appointment.serviceName}</td>
                                <td className=' text-xs md:text-md lg:text-base ' >{appointment.patientName}</td>
                                <td className=' text-xs md:text-md lg:text-base ' >{appointment.slotTime}</td>
                                <td className=' text-xs md:text-md lg:text-base ' >{appointment.fixedDate}</td>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyyAppoinment;