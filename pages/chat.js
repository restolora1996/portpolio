import React, { useEffect, useState } from 'react';
import { io } from "socket.io-client";
import nextConfig from 'next/config';
import { apiUrl } from '../config';

const { development, production} = apiUrl;
const { publicRuntimeConfig } = nextConfig();
const { CUSTOM_ENV: environment } = publicRuntimeConfig;
const socket = io( environment == 'production' ? production : development);

import ioMiddleware from 'socketio-wildcard';
const ioPatch = ioMiddleware(io.Manager);

const Chat = () => {
    const [message, setMessage] = useState('');
    const [recieveMessage, setReceiveMessage] = useState('');
    const send = () => {
        socket.emit('sendData', { message });
    }

    useEffect(() => {
        ioPatch(socket);
        socket.on('*', response => {
            const [namespace, data] = response.data;
                console.log('namespace', namespace);
                console.log('data', data);  
        })  
        socket.on('connect', () => console.log('Web Socket Connected'));
        socket.on('ROOM', d => console.log('ROOM:', d));

        socket.on("receiveData", data => {
            setReceiveMessage(data.message);
        })
    }, [socket])

    return (
        <>
            <input type="text" onChange={e => setMessage(e.target.value)}/>
            <button onClick={send}>Send Message</button>
            <h1>Message:</h1>
            {recieveMessage}

        </>
    );
    

}


export default Chat;