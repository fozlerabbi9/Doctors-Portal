import { format } from 'date-fns';
import React from 'react';
import ButtonComponent from '../SharedFile/ButtonComponent';

const Service = ({ service, date }) => {
    const { name, slots } = service;
    return (
        <div>
            <div className="card lg:max-w-lg bg-base-100 shadow-xl">
                <div className="card-body">
                    <h2 className="card-title">{name}</h2>
                    <p>
                        {
                            slots.length ? <span> {slots[0]} </span> : <span className='text-red-500'>No Date Avalibale...Try Another Date</span>
                        }
                    </p>
                    {/* <p> {format(date, 'PP')} </p> */}
                    <p>{slots.length} {slots.length > 1 ? "spaces" : "space"} avalible</p>
                    <div className="card-actions justify-center">
                        <ButtonComponent disabled={slots.length === 0} >Book appointment</ButtonComponent>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Service;