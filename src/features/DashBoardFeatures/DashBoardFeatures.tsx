import { useContext, useEffect, useState, MouseEvent, } from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import './DashBoardFeatures.scss';
import { account, database } from '../../appwrite/config';
import { Query } from 'appwrite';

import { Context } from '../../App';



const DashBoardFeatures = () => {
    const navigate = useNavigate();
    const { isLogin, nameCurrentUser, emailCurrentUser, setNameCurrentUser, setEmailCurrentUser, getUserDefaultData, getSessionStatus } = useContext<any>(Context);

    const [phone, setPhone] = useState('');
    const [street, setStreet] = useState('');
    const [numberHouse, setNumberHouse] = useState('');
    const [numberApartment, setNumberApartment] = useState('');
    const [entrance, setEntrance] = useState('');
    const [floor, setFloor] = useState('');
    const [loaded, setLoaded] = useState(false);
    const [isFirstTime, setIsFirstTime] = useState(true);
    const [userID, setUserID] = useState(localStorage.getItem('diplomId'));
    const [isLoading, setIsloading] = useState(true);


    useEffect(() => {
        if (!isLoading) {
            getUserDefaultData({
                name: nameCurrentUser,
                email: emailCurrentUser,
                phone: phone,
                street: street,
                numberHouse: numberHouse,
                numberApartment: numberApartment,
                entrance: entrance,
                floor: floor
            })
        }
    }, [isLoading]);

    const getUserProfile = async (emailCurrentUser: any) => {
        await database.listDocuments('66483fdb0008523b3164', '66483fed003b4ac61e92', [Query.equal('email', emailCurrentUser)]).then((res: any) => {
            const resDocuments = res.documents;
            setPhone(resDocuments.length ? resDocuments[0].phone : '');
            setStreet(resDocuments.length ? resDocuments[0].street : '');
            setNumberHouse(resDocuments.length ? resDocuments[0].numberHouse : '');
            setNumberApartment(resDocuments.length ? resDocuments[0].numberApartment : '');
            setEntrance(resDocuments.length ? resDocuments[0].entrance : '');
            setFloor(resDocuments.length ? resDocuments[0].floor : '');
            setIsFirstTime(resDocuments.length ? false : true);
            setIsloading(false);

        }).catch((e: any) => {
            console.log(e)
        });
    }

    useEffect(() => {
        if (loaded) return;
        setLoaded(true);
        isLogin()
            .then((res: any) => {
                getUserProfile(res);
                
            });
    }, [emailCurrentUser, nameCurrentUser]);

    const handleLogout = async () => {
        await account.deleteSession('current').then((res: any) => {
            navigate('/login');
            getSessionStatus(false);
        }).catch((e: any) => {
            console.log(e);
        })
    }

    const sendData = async (e: MouseEvent<HTMLElement>) => {
        e.preventDefault();
        if (isFirstTime) {
            await database.createDocument('66483fdb0008523b3164', '66483fed003b4ac61e92', 'unique()', {
                name: nameCurrentUser,
                email: emailCurrentUser,
                phone: phone,
                street: street,
                numberHouse: numberHouse,
                numberApartment: numberApartment,
                entrance: entrance,
                floor: floor
            }).then((res: any) => {
                localStorage.setItem('diplomId', res.$id);
            }).catch(e => {
                console.log(e);
            });

            setIsFirstTime(false);
        } else {
            await database.updateDocument('66483fdb0008523b3164', '66483fed003b4ac61e92', userID ? userID : '', {
                name: nameCurrentUser,
                email: emailCurrentUser,
                phone: phone,
                street: street,
                numberHouse: numberHouse,
                numberApartment: numberApartment,
                entrance: entrance,
                floor: floor
            }).then((res: any) => {

            }).catch((e: any) => {
                console.log(e);
            })
        }
    }


    return (
        <div className='dashboard'>
            <div className="dashboard-wrapper">

                {!isLoading ? <>
                    <h1>Личный кабинет</h1>
                    <form>
                        <input type="text" placeholder='Имя' onChange={(e) => setNameCurrentUser(e.target.value)} value={nameCurrentUser} disabled style={{ opacity: '0.5' }} />
                        <input type="mail" placeholder='Почта' onChange={(e) => setEmailCurrentUser(e.target.value)} value={emailCurrentUser} disabled style={{ opacity: '0.5' }} />
                        <input type="text" placeholder='Телефон' onChange={(e) => setPhone(e.target.value)} value={phone} />
                        <input type="text" placeholder='Улица' onChange={(e) => setStreet(e.target.value)} value={street} />
                        <input type="text" placeholder='Номер дома' onChange={(e) => setNumberHouse(e.target.value)} value={numberHouse} />
                        <input type="text" placeholder='№ квартиры/офиса' onChange={(e) => setNumberApartment(e.target.value)} value={numberApartment} />
                        <input type="text" placeholder='Подъезд' onChange={(e) => setEntrance(e.target.value)} value={entrance} />
                        <input type="text" placeholder='Этаж' onChange={(e) => setFloor(e.target.value)} value={floor} />
                        <button onClick={sendData}>Сохранить</button>
                    </form>
                    <button onClick={handleLogout}>Выйти</button>
                    <Link to={'/basket'} className="no-underline">
                        <button>
                            Корзина
                        </button>
                    </Link>
                </> : <><div>
                    <h1>Loading</h1>
                    <button onClick={handleLogout}>Выйти</button>
                    <Link to={'/basket'} className="no-underline">
                        <button>
                            Корзина
                        </button>
                    </Link>
                </div></>}
            </div>

        </div>
    );
}

export default DashBoardFeatures;