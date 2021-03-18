import axios from 'axios';
import React, { useState } from 'react';

const LoginForm = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();

        const authObject = {
            'Project-ID': '906adec1-1649-4806-8dba-44e36a9400cc',
            'User-Name': username,
            'User-Secret': password,
        };

        try {
            await axios.get('https://api.chatengine.io/chats', {
                headers: authObject,
            });

            localStorage.setItem('username', username);
            localStorage.setItem('password', password);

            window.location.reload();
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <div className="wrapper">
            <div className="form" onSubmit={handleSubmit}>
                <h1 className="title">Discord</h1>
                <input
                    type="text"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    className="input"
                    placeholder="Username"
                    required
                />
                <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="input"
                    placeholder="Password"
                    required
                />
                <div align="center">
                    <button type="submit" className="button">
                        <span>Start Chatting</span>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default LoginForm;
