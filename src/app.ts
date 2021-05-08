import express, { Application } from "express";
import router from './routes/routerModule';
import corsOptionsDelegate from "./functions/cors";
const cors = require('cors');


const app: Application = express();

app.use(cors(corsOptionsDelegate));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/api/v1/", router);

app.listen(5000, () => console.log('Server running'));