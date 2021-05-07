import * as bodyParser from "body-parser";
import express, { Application, Request, Response, NextFunction } from "express"

const router: Application = express();
router.use(express.json());
router.use(express.urlencoded({ extended: true }));


router.use((req: Request, res: Response, next: NextFunction) => {
    res.header('Acc')
})

router.listen(5000, () => console.log('Server running'));