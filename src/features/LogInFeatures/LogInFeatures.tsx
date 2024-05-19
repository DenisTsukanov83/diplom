import { FC, useState, useEffect, MouseEvent, useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './LogInFeatures.scss';
import {account} from '../../appwrite/config';
import { error } from 'console';

import { Context } from '../../App';


const LogInFeatures: FC = () => {
    const {isLogin} = useContext<any>(Context);

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleSubmit = (e: MouseEvent<HTMLElement>) => {
        e.preventDefault();
        if(email === '' || password === '') {
            alert('Пожалуйста введите корректные данные');
        } else {
            login()
        }
    }

    const login = async() => {
        account.createEmailPasswordSession(email, password).then((res:any) => {
            navigate('/dashboard');
        }).catch((e: any) => {
            alert(e.message);
        })
        
    }
    return (
        <div className='login'>
            <div className="login-wrapper">
            <h1>Вход</h1>
            <form >
                <input type="email" placeholder="Email" value={email} onChange={e => setEmail(e.target.value)} />
                <input type="password" placeholder="Password" value={password} onChange={e => setPassword(e.target.value)} />
                <button onClick={handleSubmit}>
                    Войти
                </button>
            </form>
            <Link to={'/register'} className="no-underline">
                <button>
                    Регистрация
                </button>
            </Link>
            <Link to={'/basket'} className="no-underline">
                <button>
                    Корзина
                </button>
            </Link>
            </div>
            
        </div>
    );
}

export default LogInFeatures;