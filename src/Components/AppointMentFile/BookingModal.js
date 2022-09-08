import { format } from 'date-fns';
import React from 'react';

const BookingModal = ({ tritment, date, setTritment }) => {
    const { _id, name, slots } = tritment;
    const fixedDate = format(date, 'PP');
    const serviceName = name;
    // console.log(date)

    const handleBooking = (event) => {
        event.preventDefault();
        const slotTime = event.target.timeSlots.value;
        const patientName = event.target.fname.value;
        const number = event.target.number.value;
        const email = event.target.email.value;

        const bookingInfo = { _id, serviceName, slotTime, fixedDate, patientName, number, email }
        console.log(bookingInfo);
        setTritment(null);
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
                                slots.map(slot => <option value={slot}>{slot}</option>)
                            }
                        </select>
                        <input name='fname' className='mb-3 w-full rounded-lg shadow-md ' placeholder='Full Name' type="text" /> <br />
                        <input name='number' className='mb-3 w-full rounded-lg shadow-md' placeholder='Phone Number' type="number" /> <br />
                        <input name='email' className='mb-3 w-full rounded-lg shadow-md' placeholder='Valid Email' type="email" /> <br />
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