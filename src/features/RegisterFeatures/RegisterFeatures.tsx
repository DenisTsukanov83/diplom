import { useState, MouseEvent } from 'react';
import { Link } from 'react-router-dom';
import { account } from '../../appwrite/config';
import { ID } from 'appwrite';

import './RegisterFeatures.scss';

const RegisterFeatures = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [name, setName] = useState('');

    const handleSubmit = (e: MouseEvent<HTMLElement>) => {
        e.preventDefault();
        if (name === '' || email === '' || password === '') {
            alert('Пожалуйста введите корректные данные');
        } else {
            register();
        }
    }

    const register = async () => {
        const id = ID.unique();
        await account.create(id, email, password, name).then(res => {
            alert('Регистрация прошла успешно!');
            setEmail('');
            setPassword('');
            setName('');
        }).catch((e: any) => {
            alert(e.message)
        })


    }

    return (
        <div className='register'>
            <div className="register-wrapper">
                <h1>Регистрация</h1>

                <form>
                    <input type="email" placeholder="Email" value={email} onChange={e => setEmail(e.target.value)} />
                    <input type="password" placeholder="Password" value={password} onChange={e => setPassword(e.target.value)} />
                    <input type="text" placeholder="Name" value={name} onChange={e => setName(e.target.value)} />
                    <button onClick={handleSubmit}>Регистрация</button>
                </form>
                <Link to={'/basket'} className="no-underline">
                    <button>
                        Корзина
                    </button>
                </Link>
                <Link to={'/login'} className="no-underline">
                    <button>
                        Вход
                    </button>
                </Link>
            </div>

        </div>
    );
};

export default RegisterFeatures;



