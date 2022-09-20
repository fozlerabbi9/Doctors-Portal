import React from 'react';
import { useCreateUserWithEmailAndPassword, useSignInWithGoogle, useUpdateProfile } from 'react-firebase-hooks/auth';
import auth from "../../../src/firebase.init";
import { useForm } from "react-hook-form";
import Loding from '../SharedFile/Loding';
import { Link, useNavigate } from 'react-router-dom';
import { signOut } from 'firebase/auth';
import useToken from '../HookFile/useToken';

const Register = () => {
    const [signInWithGoogle, gUser, loading, gError] = useSignInWithGoogle(auth);
    const { register, formState: { errors }, handleSubmit } = useForm();
    const [createUserWithEmailAndPassword, createUser, createLoading, createError,] = useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });
    const [updateProfile, updating, updateError] = useUpdateProfile(auth);
    const navigate = useNavigate();
    const [token] = useToken(createUser || gUser)

    if (loading || createLoading || updating) {
        return <Loding></Loding>
    }

    let errorMessage;
    if (gError || createError || updateError) {
        errorMessage = <p className='text-red-500 text-sm'>{gError?.message || createError?.message || updateError?.message}</p>
    }

    if (token) {
        // console.log(gUser)
        // console.log(user?.user?.displayName)
        navigate("/login")
    }

    const googleLoginFun = () => {
        signInWithGoogle();
    }

    const onSubmit = async data => {
        const email = data.email;
        const password = data.password;
        await createUserWithEmailAndPassword(email, password);
        await updateProfile({ displayName: data.name });
        // alert("Thanks to register");
        signOut(auth);
        // alert("Register Completed You can login now")
        // navigate("/login")
    };

    return (
        <div className='flex h-96 justify-center items-center '>
            <div className="card w-96 lg:mt-28 bg-base-100 shadow-2xl">
                <div className="card-body">
                    <h2 className="items-center text-xl font-bold py-1 rounded-md bg-slate-200">Register</h2>

                    <form onSubmit={handleSubmit(onSubmit)}>

                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text">Enter Name</span>
                            </label>
                            <input
                                type="text"
                                placeholder="Name"
                                className="input input-bordered w-full max-w-xs"
                                {...register("name", {
                                    required: {
                                        value: true,
                                        message: "Name is required"
                                    }
                                })}
                            />
                            <label className="label">
                                {errors.name?.type === 'required' && <span className="label-text-alt text-red-500">{errors.name?.message}</span>}
                            </label>
                        </div>

                        <div className="form-control w-full max-w-xs">
                            <label className="label">
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
                            <label className="label">
                                {errors.email?.type === 'required' && <span className="label-text-alt text-red-500">{errors.email?.message}</span>}
                                {errors.email?.type === 'pattern' && <span className="label-text-alt text-red-500">{errors.email?.message}</span>}

                            </label>
                        </div>

                        <div className="form-control w-full max-w-xs">
                            <label className="label">
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
                            <label className="label">
                                {errors.password?.type === 'required' && <span className="label-text-alt text-red-500">{errors.password?.message}</span>}
                                {errors.password?.type === 'minLength' && <span className="label-text-alt text-red-500">{errors.password?.message}</span>}

                            </label>
                            {errorMessage}
                        </div>

                        <input className='btn w-full max-w-xs' type="submit" value="Register" />
                        <p className='text-sm mt-2 font-medium '>Already Have An Account Then  <Link className='text-primary' to='/login'>Go To Login</Link> </p>
                    </form>

                    <div className="divider">OR</div>
                    <button
                        onClick={() => googleLoginFun()}
                        className="btn btn-outline"
                    >Continue With Google</button>
                </div>
            </div>
        </div>
    );
};

export default Register;