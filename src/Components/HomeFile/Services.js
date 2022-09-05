import React from 'react';
import Sercicee from './Sercicee';
import "./Services.css";
import fluriod from "../../assets/images/fluoride.png"
import cavity from "../../assets/images/cavity.png"
import whitening from "../../assets/images/whitening.png"

const Services = () => {

    return (
        <div className="mainDiv my-20">
            <h2 className='text-2xl text-secondary font-bold'>Our services</h2>
            <h1 className="text-3xl">services we provied</h1>

            <div className="flex flex-wrap gap-5 justify-items-center justify-evenly my-8 mt-25">

                <Sercicee img={fluriod} cardtitle={"Fluoride Treatment"} para={"Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the"} ></Sercicee>
                <Sercicee cssanim={"animate-bounce"} img={cavity} cardtitle={"Cavity Filling"} para={"Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the"}></Sercicee>
                <Sercicee img={whitening} cardtitle={"Teeth Whitening"} para={"Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the"}></Sercicee>

            </div>
        </div>
    );
};

export default Services;