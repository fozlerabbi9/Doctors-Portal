import React from 'react';

const Loding = () => {
    return (
        // <div className='flex justify-center'>
        //     <button className="btn loading ">loading...</button>
        // </div>
        <div>
            <div class="flex items-center justify-center ">
                <div class="w-16 h-16 border-b-2 border-red-700 rounded-full animate-spin"></div>
            </div>
        </div>
    );
};

export default Loding;