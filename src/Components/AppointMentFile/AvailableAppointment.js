import { format } from 'date-fns';
import React from 'react';

const AvailableAppointment = ({date}) => {
    console.log(date)
    return (
        <div>
            <h1 className='text-primary'>Avalible Appointment On = {format(date, 'PP')} </h1>
        </div>
    );
};

export default AvailableAppointment;