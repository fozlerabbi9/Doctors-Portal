import { signOut } from 'firebase/auth';
import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { useQuery } from 'react-query';
import { Navigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import auth from '../../firebase.init';
import Loding from '../SharedFile/Loding';
import SingleUser from './SingleUser';

const AllUsers = () => {
    const [users, setUsers] = useState([]);
    const { data: allUsers, isLoading, refetch } = useQuery("users", () => fetch("http://localhost:5000/allUsers", {
        method: "GET",
        headers: {
            authorization: `Bearer ${localStorage.getItem("accessToken")}`
        }
    }).then(res => {
        if (res.status === 401 || res.status === 403) {
            Navigate('/');
            signOut(auth);
            localStorage.removeItem("accessToken");
            toast("user Un-Authorized")
            // toast(`${res.status.massage}`)
        }
        return res.json()
    }));

    if (isLoading) {
        return <Loding></Loding>
    }
    // console.log(users)
    // useEffect(()=> {
    //     fetch("http://localhost:5000/allUsers")
    //     .then(res => res.json())
    //     .then(data => setUsers(data))
    // }, [])
    console.log(allUsers)

    return (
        <div>
            <h2 className='text-2xl my-3 mb-5 text-purple-500 bg-slate-400 rounded-md'>All users is here</h2>
            <div className="overflow-x-auto">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th>No</th>
                            <th>Email</th>
                            <th>Make Admin</th>
                            <th>Remove User</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            allUsers?.map((user, index) => <SingleUser
                                key={user._id}
                                user={user}
                                index={index}
                                refetch={refetch}
                            ></SingleUser>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AllUsers;