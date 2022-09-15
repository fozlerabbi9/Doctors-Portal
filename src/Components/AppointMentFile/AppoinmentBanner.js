import React, { useState } from 'react';
import chair from "../../assets/images/chair.png";
import { DayPicker } from 'react-day-picker';
import 'react-day-picker/dist/style.css';
import { format } from 'date-fns';
import chairBg from "../../assets/images/bg.png";

const AppoinmentBanner = ({ date, setDate }) => {
    // console.log(date);
    // console.log(setDate);
    return (
        <div style={{
            background: `url(${chairBg})`,
            backgroundSize: "cover",
            backgroundPosition: "center"
        }} className="main-div">
            <div className="lg:py-24">
                <div className="hero">
                    {/* <div className="hero lg:py-24 mb-5 lg:mb-10"> */}
                    <div className="hero-content flex-col justify-evenly lg:w-3/4 lg:flex-row-reverse">
                        <div className="w-full md:w-2/4 lg:w-2/4 mb-0 lg:mb-0 rounded-lg shadow-2xl">
                            <img src={chair} className="" alt='dentist chair' />
                        </div>
                        {/* <DayPicker className='shadow-xl rounded-lg '
                            mode="single"
                            selected={date}
                            onClick={(date) => setDate(date)}
                            dateFormat="MM-dd-yyyy"
                        ></DayPicker> */}

                        {/* <DayPicker className='shadow-xl rounded-lg '
                            mode="single"
                            selected={date}
                            onSelect={!date ? setDate : date}
                        ></DayPicker> */}

                        <DayPicker className='shadow-xl rounded-lg'
                            mode="single"
                            selected={date}
                            onSelect={setDate}
                        ></DayPicker>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default AppoinmentBanner;