import React, { useState } from 'react';
import Footer from '../SharedFile/Footer';
import './Appoinment.css';
import AppoinmentBanner from './AppoinmentBanner';
import AvailableAppointment from './AvailableAppointment';

const Appointment = () => {
    const [date, setDate] = useState(new Date());

    return (
        <div>
            <AppoinmentBanner date={date} setDate={setDate}></AppoinmentBanner>
            <AvailableAppointment date={date}></AvailableAppointment>

            <Footer></Footer>
        </div>
    );
};

export default Appointment;