import { format } from 'date-fns';
import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import BookingModal from './BookingModal';
import Service from './Service';

const AvailableAppointment = ({ date }) => {
    const [services, setService] = useState([]);
    const [tritment, setTritment] = useState(null);
    // console.log(tritment)
    useEffect(() => {
        fetch("http://localhost:5000/service")
        // fetch("fakedata.json")
            .then(res => res.json())
            .then(data => setService(data))
    }, [])
    // console.log(services)
    return (
        <div className='lg:mt-10'>
            <h1 className='text-primary'>Avalible Appointment On = {format(date, 'PP')} </h1>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mx-5 lg:mx-0 my-5 lg:mb-14">
                {
                    services.map(service => <Service
                        key={service._id}
                        service={service}
                        date={date}
                        setTritment={setTritment}
                    ></Service>)
                }
            </div>
            {tritment && <BookingModal
                date={date}
                tritment={tritment}
                setTritment={setTritment}
                // key={tritment._id}
            ></BookingModal>}
        </div>
    );
};

export default AvailableAppointment;