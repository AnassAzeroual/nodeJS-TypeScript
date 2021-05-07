import { NextFunction, Request, Response } from 'express';

const sample = (req: Request, res: Response, next: NextFunction) => {
    return res.status(200).json({
        message: 'Hi!, from simple controller'
    });
};

export { sample };