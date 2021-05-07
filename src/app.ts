import express, { Application, Request, Response, NextFunction } from "express";
import http from 'http';
var cors = require('cors');
import routesModule from './routes/routerModule';

const router: Application = express();

const allowlist = ['localhost:5000', 'http://example2.com']
const corsOptionsDelegate = function (req: Request, callback: (arg0: null, arg1: any) => void) {
    let corsOptions;
    if (allowlist.indexOf(String(req.header('Origin'))) !== -1) {
        corsOptions = { origin: true } // reflect (enable) the requested origin in the CORS response
    } else {
        corsOptions = { origin: false } // disable CORS for this request
    }
    console.log(String(req.header('Origin')));
    console.log(corsOptions);

    callback(null, corsOptions) // callback expects two parameters: error and options
}
router.use(cors(corsOptionsDelegate))
router.use(express.json());
router.use(express.urlencoded({ extended: true }));



/** Routes go here */
router.use('/api/sample', routesModule);

/** Error handling */
router.use((req, res, next) => {
    const error = new Error('Not found');

    res.status(404).json({
        message: error.message
    });
});

const httpServer = http.createServer(router);
httpServer.listen(5000, () => console.log('Server running'));