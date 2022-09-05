import React from 'react';
import doctor from "../../assets/images/doctor.png";
import appointment from "../../assets/images/appointment.png";
import ButtonComponent from '../SharedFile/ButtonComponent';

const Appointment = () => {
    return (
        <section style={{
            background:`url(${appointment})`
        }} className='flex justify-center items-center mt-25 lg:mt-40 mb-10 p-2 lg:p-0'>
            <div className='flex-1'>
                <img className='mt-[-140px] hidden lg:block' src={doctor} alt="" />
            </div>
            <div className='lg:flex-1 text-left '>
                <h3 className='text-xl text-primary'>Appointment</h3>
                <h2 className='text-2xl text-white'>Make an Appointment today</h2>
                <p className='text-white py-2 my-2 pr-10'>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsumis that it has a more-or-less normal distribution of letters,as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page</p>
                <ButtonComponent>get Started</ButtonComponent>
            </div>
        </section>
    );
};

export default Appointment;