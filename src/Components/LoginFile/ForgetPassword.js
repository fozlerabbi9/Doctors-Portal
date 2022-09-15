import React from 'react';
import { useSendPasswordResetEmail } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import { toast } from 'react-toastify';

const ForgetPassword = ({ setOpenmodal }) => {
    const [sendPasswordResetEmail, sending, error] = useSendPasswordResetEmail(auth);

    const gmeilFun = (e) => {
        e.preventDefault()
        const email = e.target.email.value;
        console.log(email);
        sendPasswordResetEmail(email);
        toast("please chack your Gmail");
        // alert("please chack your Gmail");
        setOpenmodal(false);
    }

    return (
        <div>
            <input type="checkbox" id="forget-modal" className="modal-toggle" />
            <div className="modal modal-bottom sm:modal-middle">
                <div className="modal-box">
                    <label htmlFor="forget-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>

                    <div>
                        <form onSubmit={gmeilFun}>
                            <input className='p-2 mt-6 w-2/3 rounded-md shadow-md border-2' required type="email" name='email' placeholder='Enter Your Valid Email' />
                            <div className="card-actions justify-end">
                                <input className='btn btn-primary w-2/5 mt-6' type="submit" value="Submit" /> <br />
                            </div>
                            {/* <div className="modal-action">
                                <label htmlFor="forget-modal" type="submit" className="btn">submit</label>
                            </div> */}
                        </form>
                    </div>
                </div>
            </div>
        </div >
    );
};

export default ForgetPassword;