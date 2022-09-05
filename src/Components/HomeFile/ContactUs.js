import React from 'react';
import appointment from "../../assets/images/appointment.png";
import ButtonComponent from '../SharedFile/ButtonComponent';
import footer from "../../assets/images/footer.png";

const ContactUs = () => {
    return (
        <div className='p-2 lg:py-14 bg-center bg-cover mb-14' style={{
            // background:`url(${footer})`
            background: `url(${appointment})`
        }}>
            {/* form plaging */}
            <div>
                <h2 className='text-lg lg:text-xl text-primary lg:font-bold'>Contact Us</h2>
                <h1 className='text-3xl lg:text-4xl text-base-100'>Stay Connected With Us</h1>
            </div>
            <form className='my-5'>
                <input className='w-full lg:w-2/5 rounded-lg' type="email" placeholder="Email Address" /> <br /><br />
                <input className='w-full lg:w-2/5 rounded-lg' type="text" placeholder="Subject" /> <br /><br />
                <textarea className='w-full lg:w-2/5 rounded-lg mb-4' name="" placeholder='Your Message' id="" cols="30" rows="5"></textarea>
                    <ButtonComponent widthCls="w-32">Submit</ButtonComponent>
            </form>
        </div>
    );
};

export default ContactUs;