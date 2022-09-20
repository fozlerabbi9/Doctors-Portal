import { useEffect } from 'react';
import { useState } from 'react';

const useToken = (user) => {
    const [token, setToken] = useState('');
    useEffect(() => {
        const email = user?.user?.email;
        const currentUser = { email: email };
        if (email) {
            fetch(`http://localhost:5000/user/${email}`, {
                method: 'PUT',
                body: JSON.stringify(currentUser),
                headers: {
                    'Content-type': 'application/json',
                },
            })
                .then(res => res.json())
                .then(userData => setToken(userData))
        }
    }, [user])
    console.log("data inside useToken === ",token)
    return [token]
};

export default useToken;