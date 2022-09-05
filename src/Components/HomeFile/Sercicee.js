import React from 'react';

const Sercicee = ({img, cardtitle, para, cssanim}) => {
    return (
        <div>
            <div className="card-custom-style card w-96 bg-base-100 shadow-xl hover:bg-violet-200 transition transform hover:-translate-y-3 duration-500">
                    <figure className="px-10 pt-10">
                        <img src={img} alt="Shoes" className={`rounded-xl ${cssanim}`} />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">{cardtitle}</h2>
                        <p>{para}</p>
                    </div>
                </div>
        </div>
    );
};

export default Sercicee;