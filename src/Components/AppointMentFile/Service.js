import { format } from 'date-fns';
import React from 'react';
import ButtonComponent from '../SharedFile/ButtonComponent';

const Service = ({ service, date, setTritment }) => {
    const { name, slots } = service;
    return (
        <div>
            <div className="card lg:max-w-lg bg-base-100 shadow-xl text-center">
                <div className="card-body">
                    <h2 className=" text-primary text-2xl font-bold ">{name}</h2>
                    <p>
                        {
                            slots.length ? <span> {slots[0]} </span> : <span className='text-red-500'>No Date Avalibale...Try Another Date</span>
                        }
                    </p>
                    {/* <p> {format(date, 'PP')} </p> */}
                    <p>{slots.length} {slots.length > 1 ? "spaces" : "space"} avalible</p>
                    <div className="card-actions justify-center">
                        {/* <button className='btn btn-primary' disabled={slots.length === 0}
                            onClick={() => setTritment(service)}>Book appointment</button> */}
                        <label
                            htmlFor="booking-modal"
                            className='btn btn-primary btn-sm bg-gradient-to-r from-secondary to-primary text-white'
                            disabled={slots.length === 0}
                            onClick={() => setTritment(service)
                            }>Book appointment</label>

                        {/* <ButtonComponent
                            disabled={slots.length === 0}
                            onClick={() => setTritment(service)}
                        >Book appointment</ButtonComponent> */}
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Service;