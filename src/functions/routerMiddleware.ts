import { Response, Request, NextFunction } from 'express';

const routerMiddleware = (req: Request, res: Response, next: NextFunction) => {
    console.log(req.originalUrl);
    next();
}

export default routerMiddleware;