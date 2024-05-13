import { useEffect, useState } from 'react';
import { Navigate, useNavigate } from 'react-router-dom';
import './DashBoardFeatures.scss';
import { account } from '../../appwrite/config';



const DashBoardFeatures = (props: any) => {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [name, setName] = useState('');

    const isLogin = async () => {
        try {
            const x = await account.get();
            setEmail(x.email);
            setName(x.name);
            console.log(x)
        } catch (e) {
            setTimeout(() => {
                navigate('/login');
            }, 1000);
        }
    }

    useEffect(() => {
        isLogin();
    })

    const handleLogout = async() => {
        try {
            const x = await account.deleteSession('current');
            navigate('/login')
        } catch (e) {
            console.log(e)
        }
    }

    
    return (
        <div>
            {name && email ? <>
                <h1>Welcome, {name}</h1>
                <p>Email: {email}</p>
                <button onClick={handleLogout}>Выйти</button>
            </> : <><h1>Loading</h1></>}
        </div>
    );
}

export default DashBoardFeatures;