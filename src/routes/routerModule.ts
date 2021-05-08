import express, { Response, Request } from 'express';
import { getCarByID, sampleGet, samplePost, updateCarByID } from '../controllers/sampleController';
import errorHandling from '../functions/errorHandling';
import routerMiddleware from '../functions/routerMiddleware';
const router = express.Router();


/** Middelware */
router.use(routerMiddleware);


/** Router */
router.get('/', (req: Request, res: Response) => {
    return res.status(200).json({
        message: 'Hello World!'
    });
})

router
    .route("/cars")
    .get(sampleGet)
    .post(samplePost);

router
    .route("/cars/:carid")
    .get(getCarByID)
    .put(updateCarByID);


/** Error handling */
router.use(errorHandling);

export default router;
