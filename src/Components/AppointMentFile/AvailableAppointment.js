import { format } from 'date-fns';
import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import Service from './Service';

const AvailableAppointment = ({ date }) => {
    const [services, setService] = useState([]);
    useEffect(() => {
        fetch("fakedata.json")
            .then(res => res.json())
            .then(data => setService(data))
    }, [])
    console.log(services)
    return (
        <div>
            <h1 className='text-primary'>Avalible Appointment On = {format(date, 'PP')} </h1>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mx-5 lg:mx-0 my-5 lg:mb-14">
                {
                    services.map(service => <Service
                        key={service._id}
                        service={service}
                        date={date}
                    ></Service>)
                }
            </div>
        </div>
    );
};

export default AvailableAppointment;