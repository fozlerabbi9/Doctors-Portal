import React from 'react';
import './Home.css';
import Info from './Info';
import clock from "../../assets/icons/clock.svg";
import phone from "../../assets/icons/phone.svg";
import location from "../../assets/icons/marker.svg"
import Services from './Services';
import Exceptional from './Exceptional';
import fluriod from "../../assets/images/fluoride.png"
import cavity from "../../assets/images/cavity.png"
import whitening from "../../assets/images/whitening.png"
import Appointment from './Appointment';
import ButtonComponent from '../SharedFile/ButtonComponent';
import Testimonial from './Testimonial';
import ContactUs from './ContactUs';
import Footer from '../SharedFile/Footer';

const Home = () => {

    return (
        <div className=''>
            {/* <div className="hero min-h-screen px-15 bg-[url('https://i.ibb.co/bQvShG5/chair.png')]"> */}
            <div className="hero min-h-screen">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <img src="https://i.ibb.co/bQvShG5/chair.png" className=" lg:max-w-lg rounded-lg shadow-2xl" />
                    <div className="text-left">
                        <h1 className="text-5xl font-bold">Your new smail starts here</h1>
                        <p className="py-6 pr-10">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                        {/* <button className="btn btn-primary text-white font-bold bg-gradient-to-r from-secondary to-primary">Get Started</button> */}
                        <ButtonComponent>Get Starts</ButtonComponent>
                    </div>
                </div>
            </div>

            {/* <div className=""> */}
            <Info
                bgcolor={"bg-neutral"}
                clock={clock}
                location={location}
                phone={phone}
            ></Info>

            <Services></Services>
            <Exceptional></Exceptional>
            <Appointment></Appointment>
            <Testimonial></Testimonial>
            <ContactUs></ContactUs>
            <Footer></Footer>

            {/* </div> */}
        </div>
    );
};

export default Home;