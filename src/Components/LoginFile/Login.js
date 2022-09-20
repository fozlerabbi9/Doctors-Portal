import React from 'react';
import './Login.css';
// import { useSignInWithGoogle } from 'firebase/auth';
import { useAuthState, useSendPasswordResetEmail, useSignInWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from "../../../src/firebase.init";
import { useForm } from "react-hook-form";
import Loding from '../SharedFile/Loding';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import { useState } from 'react';
import ForgetPassword from './ForgetPassword';
import useToken from '../HookFile/useToken';


const Login = () => {
    // const { register, handleSubmit } = useForm();
    const [signInWithGoogle, guser, loading, gError] = useSignInWithGoogle(auth);
    const { register, formState: { errors }, handleSubmit } = useForm();
    const [signInWithEmailAndPassword, signuser, signloading, signerror,] = useSignInWithEmailAndPassword(auth);
    const [sendPasswordResetEmail, sending, error] = useSendPasswordResetEmail(auth);
    const [token] = useToken(signuser || guser)
    const [forgetEmail, setForgetEmial] = useState('');
    const [openModal, setOpenmodal] = useState(false);
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || "/";
    
    // console.log(forgetEmail)

    // const user = useAuthState(auth); এই ভাবে কাজ হবে না ,,,, useAuthState থেকে user আনা যাবে না,,,
    // if (user) {
    //     navigate(from, { replace: true })
    // }
    useEffect(() => {          //===========>> এই ভাবে dite hobe,,
        if (token) {
            navigate(from, { replace: true })
        }
    }, [token, from, navigate])
    // }, [signuser, guser, from, navigate])

    // if (signuser || guser) {   ===========>> এই ভাবে আর দেয়া যাবে না,,,
    //     navigate(from, { replace: true })
    // }

    if (loading || signloading) {
        return <Loding></Loding>
    }
    let errorMessage;
    if (gError || signerror) {
        errorMessage = <p className='text-red-500 text-sm'> {gError?.message || signerror?.message}</p>
        // errorMessage = <p className='text-red-500 text-sm'>{gError?.message || signerror?.message}</p>
    }

    const googleLoginFun = () => {
        signInWithGoogle();
    }

    const onSubmit = data => {
        const email = data.email;
        setForgetEmial(email);
        const password = data.password;
        signInWithEmailAndPassword(email, password);
        
        // console.log(email, password);
    };


    return (
        <div className='flex h-96 justify-center items-center '>
            <div className="card w-96 lg:mt-28 bg-base-100 shadow-2xl">
                <div className="card-body">
                    <h2 className="items-center text-xl font-bold py-1 rounded-md bg-slate-200">Login</h2>

                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className="form-control w-full max-w-xs">
                            <label className="label pb-0">
                                <span className="label-text">Enter Email</span>
                            </label>
                            <input
                                type="email"
                                placeholder="Email"
                                className="input input-bordered w-full max-w-xs"
                                {...register("email", {
                                    required: {
                                        value: true,
                                        message: "Email is required"
                                    },
                                    pattern: {
                                        value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
                                        message: 'Provide a valid email' // JS only: <p>error message</p> TS only support string
                                    }
                                })}
                            />
                            <label className="label pb-0">
                                {errors.email?.type === 'required' && <span className="label-text-alt text-red-500">{errors.email?.message}</span>}
                                {errors.email?.type === 'pattern' && <span className="label-text-alt text-red-500">{errors.email?.message}</span>}

                            </label>
                        </div>
                        <div className="form-control w-full max-w-xs">
                            <label className="label pb-0">
                                <span className="label-text">Enter Password</span>
                            </label>
                            <input
                                type="password"
                                placeholder="Password"
                                className="input input-bordered w-full max-w-xs"
                                {...register("password", {
                                    required: {
                                        value: true,
                                        message: "Password is required"
                                    },
                                    minLength: {
                                        value: 6,
                                        message: 'Mustbe 6 characters or longar'
                                    }
                                })}
                            />
                            <label className="label pb-0">
                                {errors.password?.type === 'required' && <span className="label-text-alt text-red-500">{errors.password?.message}</span>}
                                {errors.password?.type === 'minLength' && <span className="label-text-alt text-red-500">{errors.password?.message}</span>}

                            </label>
                            {errorMessage}
                            {/* {
                                signerror && <p className='text-red-500 mb-2 text-xs'>{signerror?.message}</p>
                            } */}
                        </div>

                        <input className='btn w-full max-w-xs' type="submit" value="Login" />
                        {/* navigate() */}
                        {/* <Link to='register'>register</Link> */}
                        <p className='text-sm mt-2 font-medium '>New To Doctors Portal...? <Link className='text-primary' to='/register'>Create New Account</Link> </p>
                    </form>

                    <p className='text-right text-sm text-green-600 pt-2' onClick={() => setOpenmodal(true)} style={{ marginTop: -5, marginBottom: 10 }} > <label htmlFor="forget-modal">Forget Password</label> </p>

                    {/* <form onSubmit={handleSubmit(onSubmit)} className="text-left">
                        <label htmlFor="">Email :</label>
                        <input className='shadow-xl rounded-md w-full mb-3 py-1 bg-slate-100' {...register("email",)} /> <br />
                        <label htmlFor="">Password :</label>
                        <input  name="password" className='shadow-xl rounded-md w-full mb-3 py-1 bg-slate-100' {...register("password")} /> <br />
                        <input className='text-center w-full bg-green-400 py-2 rounded-md text-xl' type="submit" />
                    </form> */}

                    <div className="divider">OR</div>
                    {/* {
                        gError && <p className='text-red-500 text-xs'>{gError.message} log-in cansiled</p>
                    } */}
                    <button
                        onClick={() => googleLoginFun()}
                        // onClick={() => signInWithGoogle()}
                        className="btn btn-outline"
                    >Continue With Google</button>
                </div>
            </div>
            {
                openModal && <ForgetPassword 
                setOpenmodal={setOpenmodal}
                ></ForgetPassword>
            }
        </div>
    );
};

export default Login;