import { signOut } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from "react-router-dom";
import auth from '../../firebase.init';

const NavBar = () => {
    const [user] = useAuthState(auth);
    const logout = () => {
        signOut(auth);
      };

    let userNameFirstLatter;
    if (user) {
        const userName = user?.displayName;
        userNameFirstLatter = userName?.slice(0, 1).toUpperCase();
    }
    const userPhotoUrl = user?.photoURL;
    // console.log(userNameFirstLatter);
    // console.log(user);
    // console.log(userPhotoUrl);

    const Menuitems = <>
        <li> <Link to={'/'}>Home</Link> </li>
        <li><Link to={'About'}>About</Link></li>
        <li><Link to={'Appointment'}>Appointment</Link></li>
        <li><Link to={'Reviews'}>Reviews</Link></li>
        {
            user ? <li>  <Link className='text-red-400' onClick={logout} to={''}>Log Out</Link> </li> : <li>  <Link to={'Login'}>Login</Link> </li>
        }
        {/* <li> {user ? <Link to={'Login'}>Log Out</Link> : <Link to={'Login'}>Login</Link>} </li> */}
        {
            user && <li className='bg-gray-500 rounded-full w-12 flex justify-center items-center text-2xl font-bold text-white '>{userNameFirstLatter} </li>
        }
    </>
    return (
        <div className="navbar bg-base-100 ">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex="0" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex="0" className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        {Menuitems}
                    </ul>
                </div>
                <a className="btn btn-ghost normal-case text-xl">Doctors-Portal</a>

            </div>
            <div className="navbar-end hidden lg:flex">
                <ul className="menu menu-horizontal p-0">
                    {Menuitems}
                </ul>

            </div>
        </div>
    );
};

export default NavBar;