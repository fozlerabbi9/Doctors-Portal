import { format } from 'date-fns';
import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { useQuery } from 'react-query';
import { toast } from 'react-toastify';
import BookingModal from './BookingModal';
import Service from './Service';
import Loding from '../SharedFile/Loding';

const AvailableAppointment = ({ date }) => {
    // const [services, setService] = useState([]);
    const [tritment, setTritment] = useState(null);
    // console.log(tritment)
    const formatedDate = date && format(date, "PP")

    const { data : services, isLoading, refetch} = useQuery(["acailable", formatedDate], () =>
        fetch(`http://localhost:5000/available?date=${formatedDate}`)
            .then(res => res.json())
    )
    if(isLoading){
        return <Loding></Loding>
    }
    // useEffect(() => {
    //     // fetch("http://localhost:5000/service")
    //     fetch(`http://localhost:5000/available?date=${formatedDate}`)
    //         // fetch("fakedata.json")
    //         .then(res => res.json())
    //         .then(data => setService(data))
    // }, [formatedDate]);

    // if (!date) {
    //     toast("please select the date first")
    //     return
    // }
    // console.log(tritment)
    return (
        <div className='lg:mt-10'>
            <h1 className='text-primary'>Avalible Appointment On =  {date && format(date, 'PP')} </h1>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mx-5 lg:mx-0 my-5 lg:mb-14">
                {
                    services?.map(service => <Service
                        key={service._id}
                        service={service}
                        date={date && date}
                        setTritment={setTritment}
                    ></Service>)
                }
            </div>
            {tritment && <BookingModal
                date={date}
                tritment={tritment}
                setTritment={setTritment}
                refetch={refetch}
            ></BookingModal>}

            {/* {tritment && date ? <>
                <BookingModal
                    date={date && date}
                    tritment={tritment}
                    setTritment={setTritment}
                // key={tritment._id}
                ></BookingModal>
            </> : toast("please selece the date first") } */}
        </div>
    );
};

export default AvailableAppointment;