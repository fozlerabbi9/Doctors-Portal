import React from 'react';
import treatment from "../../assets/images/treatment.png";
import ButtonComponent from '../SharedFile/ButtonComponent';
import "./Excertional.css";

const Exceptional = () => {
    return (
        <div className='lg:w-2/3 mx-auto my-5'>
            <div className="card flex-col lg:flex-row mx-auto card-side bg-base-100 shadow-xl">
                <figure className=''>
                    <img src={treatment} alt="Movie" className=" md:w-60 lg:w-80" />
                </figure>
                <div className="card-body text-left lg:px-12">
                    <h2 className="card-title font-bold text-2xl lg:text-4xl lg:py-3 ">Exceptional Dental Care, on Your Terms</h2>
                    <p className=' flex-grow-0 '>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsumis that it has a more-or-less normal distribution of letters,as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page</p>
                    <div className="card-actions">
                        <ButtonComponent>lets Start</ButtonComponent>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Exceptional;