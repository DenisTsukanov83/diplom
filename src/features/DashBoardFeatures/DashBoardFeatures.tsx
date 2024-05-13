import { useEffect, useState} from 'react';
import { useNavigate } from 'react-router-dom';
import './DashBoardFeatures.scss';
import { account } from '../../appwrite/config';


const DashBoardFeatures = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [name, setName] = useState('');

    const isLogin = async () => {
        const x = await account.get().then(res => {
            setEmail(res.email);
            setName(res.name);
        }).catch(e => {
            if (e.message === 'User (role: guests) missing scope (account)') {

            } else {
                navigate('/login');
            }
            console.log(e.message)

        });
    }



    useEffect(() => {
        isLogin();
        console.log(name, email)
    })

    const handleLogout = async () => {
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
            </> : <><div>
                <h1>Loading</h1>
                <button onClick={handleLogout}>Выйти</button>
            </div></>}
        </div>
    );
}

export default DashBoardFeatures;