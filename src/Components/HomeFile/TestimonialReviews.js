import React from 'react';
import "./TestimonialReviews.css";

const TestimonialReviews = ({ review }) => {
    const { id, name, home, img, description } = review;
    // console.log(name);
    return (
        <div className="card bg-base-100 shadow-xl  hover:-translate-y-1 hover:scale-105 duration-300">
            <div className="card-body text-left">
                <p>{description}</p>
                <div className="flex items-center ">
                    <div className="rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                        <img className='w-16' src={img} alt="" />
                    </div>
                    <div className="text-div ml-3">
                        <h2 className="">{name}</h2>
                        <p>{home}</p>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default TestimonialReviews;