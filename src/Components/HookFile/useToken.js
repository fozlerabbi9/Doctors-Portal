import { useEffect } from 'react';
import { useState } from 'react';
import { toast } from 'react-toastify';

const useToken = (user) => {
    const [token, setToken] = useState('');
    useEffect(() => {
        const email = user?.email;
        const currentUser = { email: email };
        console.log(currentUser)
        if (email) {
            fetch(`http://localhost:5000/user/${email}`, {
                method: 'PUT',
                body: JSON.stringify(currentUser),
                headers: {
                    'Content-type': 'application/json',
                },
            })
                .then(res => res.json())
                .then(userData => {
                    const accessToken = userData.token;
                    console.log(accessToken);
                    localStorage.setItem("accessToken", accessToken);
                    setToken(accessToken);
                })
        }
        
    }, [user])
    // console.log("data inside useToken === ",token)
    return [token]
};

export default useToken;