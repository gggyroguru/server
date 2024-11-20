import express, {Router} from 'express';
import cors from 'cors';
import upload from 'express-fileupload';

const server = express();
const router = Router();

server.use(cors());
server.use(express.json());
server.use(express.urlencoded({extended: true}));
server.use(upload());

router.use('/static', express.static('static'));
server.use('/api', router);

server.all('*', (_, response) => {
    return response.status(404).json({message: 'route not found'});
});

export default server;
export {router};