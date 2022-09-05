import React from 'react';
import quoteIcone from "../../assets/icons/quote.svg";
import winson from "../../assets/images/people1.png";
import winson2 from "../../assets/images/people2.png";
import winson3 from "../../assets/images/people3.png";
import TestimonialReviews from './TestimonialReviews';

const Testimonial = () => {
    const reviews = [
        {
            _id: 1,
            name: "Winson Herry",
            home: "California",
            // img : {winson}, ei vabe kaj hob na,,,,,,,,,,,,,,,,
            img: winson,
            description: "It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content",
        },
        {
            _id: 2,
            name: "Winson Herry",
            home: "California",
            // img : {winson2}, ei vabe kaj hob na,,,,,,,,,,,,,,,,
            img: winson2,
            description: "It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content",
        },
        {
            _id: 3,
            name: "Winson Herry",
            home: "California",
            // img : {winson3}, ei vabe kaj hob na,,,,,,,,,,,,,,,,
            img: winson3,
            description: "It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content",
        }
    ];
    return (
        <section className='my-12 py-5 lg:mx-10'>
            <div className='flex justify-between'>
                <div className='text-left'>
                    <h2 className=' text-1xl font-bold text-primary '>Testimonial</h2>
                    <h1 className=' text-2xl '>What Our Patients Say</h1>
                </div>
                {/* <div> */}
                <img className='w-24 lg:w-48' src={quoteIcone} alt="" />
                {/* </div> */}
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
                {
                    reviews.map(review => <TestimonialReviews
                        review={review}
                        key={review._id}
                    ></TestimonialReviews>)
                }
            </div>
        </section>
    );
};

export default Testimonial; 