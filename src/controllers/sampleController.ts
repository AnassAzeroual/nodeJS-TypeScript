import { NextFunction, Request, Response } from 'express';

const sampleGet = (req: Request, res: Response, next: NextFunction) => {
    return res.status(200).json({
        message: 'Hi!, from simple controller Get'
    });
};

const samplePost = (req: Request, res: Response, next: NextFunction) => {
    return res.status(200).json({
        message: 'Hi!, from simple controller Post'
    });
};

const getCarByID = (req: Request, res: Response) => {
    return res.status(200).json({
        message: "hi get /things/cars/" + req.params.carid
    });
};

const updateCarByID = (req: Request, res: Response) => {
    return res.status(200).json({
        message: "hi put /things/cars/" + req.params.carid
    });
};

export { sampleGet, samplePost, getCarByID, updateCarByID };