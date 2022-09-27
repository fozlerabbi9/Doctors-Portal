import React from 'react';
// import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, Outlet } from 'react-router-dom';
// import auth from '../../firebase.init';
// import useAdmin from '../HookFile/useAdmin';

const Dashboard = () => {
    // const user = useAuthState(auth)
    //  const userEmail = user[0]?.email;
    // const [admin] = useAdmin(user);
    // console.log(admin);
    return (
        <div>
            <div className="drawer drawer-mobile">

                <input id="dashbord-sidbar" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content">
                    {/* <!-- Page content here --> */}
                    {/* <h2 className='text-3xl text-purple-500 text-left'>thiS is dashboard page</h2> */}
                    <Outlet></Outlet>

                </div>
                <div className="drawer-side">
                    <label htmlFor="dashbord-sidbar" className="drawer-overlay"></label>
                    <ul className="menu p-4 overflow-y-auto w-80  bg-base-100 text-base-content">
                        {/* <!-- Sidebar content here --> */}
                        {/* <li><Link to={'/Dashboard'}>Dashboard</Link></li> */}
                        {/* <li><Link to="/Dashboard/myReviews">MyReviews</Link></li> */}
                        <li><Link to="MyAppointment">MyAppointment</Link></li>
                        <li><Link to="myReviews">MyReviews</Link></li>
                        <li><Link to="/Dashboard/allUsers">All Users</Link></li>
                        {/* { admin && <li><Link to="/Dashboard/allUsers">All Users</Link></li>} */}
                    </ul>

                </div>
            </div>
        </div>
    );
};

export default Dashboard;