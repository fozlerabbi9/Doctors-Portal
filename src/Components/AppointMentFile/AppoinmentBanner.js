import React, { useState } from 'react';
import chair from "../../assets/images/chair.png";
import { DayPicker } from 'react-day-picker';
import 'react-day-picker/dist/style.css';
import { format } from 'date-fns';

const AppoinmentBanner = ({date, setDate}) => {
    return (
        <div className="main-div">
            <div className="py-24">
                <div class="hero">
                    {/* <div class="hero lg:py-24 mb-5 lg:mb-10"> */}
                    <div class="hero-content flex-col justify-evenly lg:w-3/4 lg:flex-row-reverse">
                        <div className="w-full md:w-2/4 lg:w-2/4 mb-0 lg:mb-0 rounded-lg shadow-2xl">
                            <img src={chair} class="" alt='dentist chair' />
                        </div>
                        <DayPicker className='shadow-xl rounded-lg '
                            mode="single"
                            selected={date}
                            onSelect={setDate}
                        ></DayPicker>
                    </div>
                </div>
                <div className="">
                    {/* <p>Your Selected Date Is = <span className='text-green-700 font-bold'>{format(date, 'PP')}</span> </p> */}

                    {/* <p>Your Selected Date Is = <span className='text-red-700 font-bold'>{format(date, 'pp')}</span> </p> */}

                </div>

            </div>



        </div>
    );
};

export default AppoinmentBanner;