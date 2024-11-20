import {Server} from 'socket.io';
import http from "./http.js";

const socket = new Server(http, {
    cors: {
        origin: 'http://localhost:6090',
        methods: ['GET', 'POST', 'PUT', 'DELETE'],
    }
});

const io = socket.of('/api');

export default io;