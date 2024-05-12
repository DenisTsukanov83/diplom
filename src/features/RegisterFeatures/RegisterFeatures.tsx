import React, { useState } from 'react';
import { Client, Account, ID } from 'appwrite';


export const client = new Client();

client
    .setEndpoint('https://cloud.appwrite.io/v1')
    .setProject('663f4bf100346fa81c01'); // Replace with your project ID

const account = new Account(client);

const RegisterFeatures = () => {
    const [loggedInUser, setLoggedInUser] = useState(null);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [name, setName] = useState('');

    async function login(email: string, password: string) {
        const session = await account.createSession(
            email, 
            password
        );
    }



    async function register(email: string, name: string) {

        const promise = account.create(ID.unique(), email, name);

        promise.then(function (response) {
            console.log(response); // Success
        }, function (error) {
            console.log(error); // Failure
        });
    }

    async function deleteSession() {
        await account.deleteSession('current');
        setLoggedInUser(null);
    }



    return (
        <div>
            <p>
                {loggedInUser ? `Logged in as ${loggedInUser}` : 'Not logged in'}
            </p>

            <form>
                <input type="email" placeholder="Email" value={email} onChange={e => setEmail(e.target.value)} />
                <input type="password" placeholder="Password" value={password} onChange={e => setPassword(e.target.value)} />
                <input type="text" placeholder="Name" value={name} onChange={e => setName(e.target.value)} />

                <button type="button" onClick={() => login(email, password)}>
                    Login
                </button>

                <button
                    type="button"
                    onClick={() => register(email, name)}
                >
                    Register
                </button>

                <button
                    type="button"
                    onClick={deleteSession}
                >
                    Logout
                </button>
            </form>
        </div>
    );
};

export default RegisterFeatures;



