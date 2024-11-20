import type {NextFunction, Response} from 'express';
import type {CustomRequest} from "../interfaces/request.ts";
import {verifyAccessToken} from "../utilities/jsonwebtoken.ts";

const verify = (request: CustomRequest, response: Response, next: NextFunction) => {
    try {
        let accessToken = request.header('Authorization');
        if (!accessToken) {
            return response.status(401).json({message: 'access denied'});
        }
        if (!accessToken.startsWith('Bearer ')) {
            return response.status(400).json({message: 'access denied'});
        }
        accessToken = accessToken.replace('Bearer ', '');
        const decode = verifyAccessToken(accessToken) as { _id: string };
        request._id = decode._id;
        next();
    } catch (error) {
        return response.status(401).json({message: 'access denied'});
    }
}

export default verify;