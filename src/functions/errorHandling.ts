import { NextFunction, Request, Response } from "express";

const errorHandling = (req: Request, res: Response, next: NextFunction) => {
    // console.log({ req });

    const error = new Error('Not found');

    res.status(404).json({
        message: error.message,
        method: req.method,
        path: req.originalUrl,
        date: new Date().toISOString()
    });
}

export default errorHandling;