import React from 'react';
import appointment from "../../assets/images/appointment.png";
import footer from "../../assets/images/footer.png";

const Footer = () => {
    const date = new Date();
    const year = date.getFullYear();
    return (
        // <div className='mx-10 bg-no-repeat bg-cover text-base-100 ' style={{
        //     // background:`url(${appointment})`
        //     backgroundImage: "url(https://siddharthpetro.com/wp-content/uploads/2019/09/Footer-Background-Image.png)"
        //     // background:`url(${footer})`
        // }}>
        //     <footer className="footer p-10 ">
        //         <div>
        //             <span className="footer-title">Services</span>
        //             <a className="link link-hover">Branding</a>
        //             <a className="link link-hover">Design</a>
        //             <a className="link link-hover">Marketing</a>
        //             <a className="link link-hover">Advertisement</a>
        //         </div>
        //         <div>
        //             <span className="footer-title">Company</span>
        //             <a className="link link-hover">About us</a>
        //             <a className="link link-hover">Contact</a>
        //             <a className="link link-hover">Jobs</a>
        //             <a className="link link-hover">Press kit</a>
        //         </div>
        //         <div>
        //             <span className="footer-title">Legal</span>
        //             <a className="link link-hover">Terms of use</a>
        //             <a className="link link-hover">Privacy policy</a>
        //             <a className="link link-hover">Cookie policy</a>
        //         </div>
        //     </footer>
        //     <h5 className='text-xs pb-8'>Copyright 2022 All Rights Reserved</h5>
        // </div>

        <footer className="mx-10 pb-10" style={{
            background:`url(${footer})`,
            backgroundSize:"cover",
            backgroundPosition:"center",
            // margin:"0 10px"
        }}>
            <div className="footer md:justify-between lg:justify-around ">
                <div>
                    <span className="footer-title">Services</span>
                    <a className="link link-hover">Branding</a>
                    <a className="link link-hover">Design</a>
                    <a className="link link-hover">Marketing</a>
                    <a className="link link-hover">Advertisement</a>
                </div>
                <div>
                    <span className="footer-title">Company</span>
                    <a className="link link-hover">About us</a>
                    <a className="link link-hover">Contact</a>
                    <a className="link link-hover">Jobs</a>
                    <a className="link link-hover">Press kit</a>
                </div>
                <div>
                    <span className="footer-title">Legal</span>
                    <a className="link link-hover">Terms of use</a>
                    <a className="link link-hover">Privacy policy</a>
                    <a className="link link-hover">Cookie policy</a>
                </div>
            </div>

            <div className='mt-10 text-xs'>
                <p>Copyright © {year} - All right reserved by ACME Industries Ltd</p>
            </div>

        </footer>
    );
};

export default Footer;