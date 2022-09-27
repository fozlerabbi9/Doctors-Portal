// import React from 'react';
// import { useEffect } from 'react';
// import { useState } from 'react';

// const useAdmin = (user) => {
//     // const [admin, setAdmin] = useState(false);
//     // useEffect(() => {
//     //     const email = user.email;  // ei user age thekei Set hoye thakbe (eti sign in kora user na,,,, alrady state a set hoye gese sei user)
//     //     console.log(email)
//     //     if (email) {
//     //         fetch(`http://localhost:5000/admin/${email}`, {
//     //             method: 'GET',
//     //             headers: {
//     //                 'Content-type': 'application/json',
//     //                 authorization: `Bearer ${localStorage.getItem("accessToken")}`
//     //             },
//     //         })
//     //             .then(res => res.json())
//     //             .then(userData => {
//     //                 // console.log(userData.admin)
//     //                 setAdmin(userData.admin);
//     //             })
//     //     }
//     //     return [admin];
//     // }, [user])
// };

// export default useAdmin;