import React from 'react';
// import clock from "../../assets/icons/clock.svg";
// import phone from "../../assets/icons/phone.svg";
// import location from "../../assets/icons/marker.svg"


const Info = ({ clock, location, phone ,bgcolor }) => {
    return (
        <div className="mx-auto">
            <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 px-3 mb-5">
                {/* card no - 1 */}
                <div className="py-10 rounded overflow-hidden shadow-lg bg-gradient-to-r from-secondary to-primary">
                    <div className=" flex">
                        <img className="mx-5" src={clock} alt="" />
                        <div className=" text-left ">
                            <h1>Opening Hours</h1>
                            <p>Lorem Ipsum is simply dummy text of the pri</p>
                        </div>
                    </div>
                </div>
                {/* card no - 1 */}
                <div className= {`py-10 rounded overflow-hidden shadow-lg  text-white ${bgcolor}`}>
                    <div className=" flex">
                        <img className="mx-5" src={location} alt="" />
                        <div className=" text-left ">
                            <h1>Visit our location</h1>
                            <p>Brooklyn, NY 10036, United States</p>
                        </div>
                    </div>
                </div>
                {/* card no - 1 */}
                <div className="py-10 rounded overflow-hidden shadow-lg bg-gradient-to-r from-secondary to-primary">
                    <div className=" flex">
                        <img className="mx-5" src={phone} alt="" />
                        <div className=" text-left ">
                            <h1>Contact us now</h1>
                            <p>+000 123 456789</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Info;