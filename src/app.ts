import express, { Application, Request, Response, NextFunction } from "express"

const app: Application = express();

const add = (a: number, b: number) => a + b;
app.get('/', (req: Request, res: Response) => {
    console.log(add(5, 6));

    res.send('test get / 2020');
});

app.listen(5000, () => console.log('Server running'));