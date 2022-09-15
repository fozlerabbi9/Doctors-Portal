import { format } from 'date-fns';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { toast } from 'react-toastify';
import auth from '../../firebase.init';

const BookingModal = ({ tritment, date, setTritment }) => {
    const user = useAuthState(auth);
    const userName = user[0]?.displayName;
    const userEmail = user[0]?.email;
    // console.log(user);
    // console.log(userName);
    const { _id, name, slots } = tritment;
    const fixedDate = date && format(date, 'PP');
    const serviceName = name;
    // console.log(date)

    const handleBooking = (event) => {
        event.preventDefault();
        const slotTime = event.target.timeSlots.value;
        const patientName = event.target.fname.value;
        const number = event.target.number.value;
        const parsNumber = parseInt(number);
        const email = event.target.email.value;
        const bookingInfo = {
            tritmentId: _id,
            serviceName: serviceName,
            slotTime: slotTime,
            fixedDate: fixedDate,
            patientName: patientName,
            number: parsNumber,
            email: email,
        };

        fetch("http://localhost:5000/booking", {
            method: 'POST',
            body: JSON.stringify(bookingInfo),   // body: JSON.stringify({bookingInfo}) এই কাজ করা যাবে না, 
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                console.log(data);
                if (data.success) {
                    toast(`Your Appoinment is Booked SuccessFully${fixedDate} at ${slotTime}`)
                }
                else {
                    toast.error(`Already Have an appoinment on ${data.bookingInfo?.fixedDate} at ${data.bookingInfo?.slotTime}`)
                }
            })
        setTritment(null);

        // console.log(bookingInfo);
        // console.log(typeof parsNumber);
    }
    return (
        <div>
            {/* <label htmlFor="my-modal-6" className="btn modal-button">open modal</label> */}

            <input type="checkbox" id="booking-modal" className="modal-toggle" />
            <div className="modal modal-bottom sm:modal-middle">
                <div className="modal-box">
                    <label htmlFor="booking-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className="font-bold text-lg mb-4">Booking For : <span className='text-primary'>{name}</span></h3>

                    <form onSubmit={handleBooking}>
                        <input className='mb-3 w-full rounded-lg shadow-md' readOnly value={`${format(date, 'PP')}`} type="text" /> <br />
                        {/* <input type="text" placeholder="Type here" className="input w-full mb-3 shadow-md" /> */}
                        <select name='timeSlots' className="select select-bordered mb-3 w-full rounded-lg shadow-md border-solid border-2">
                            {
                                slots.map((slot, index) => <option key={index} value={slot}>{slot}</option>)
                            }
                        </select>
                        <input name='fname' className='mb-3 w-full rounded-lg shadow-md' placeholder='Full Name' type="text" /> <br />
                        <input name='email' className='mb-3 w-full rounded-lg shadow-md' disabled value={userEmail || ""} type="email" /> <br />
                        <input name='number' className='mb-3 w-full rounded-lg shadow-md' placeholder='Phone Number' type="number" /> <br />
                        <div className="card-actions justify-end">
                            <input className='btn btn-primary w-2/5' type="submit" value="Submit" /> <br />
                        </div>
                    </form>
                </div>
            </div>
        </div >
    );
};

export default BookingModal;