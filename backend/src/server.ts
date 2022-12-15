import express from 'express';
import dotenv from 'dotenv';
dotenv.config();
import cors from 'cors';
import usersRouter from './routers/user.router';
import { apiUserPrefix } from '../../environment/urls'
import { dbConnect } from './configs/database.config';
dbConnect();

/** Defining app.  */
const app = express();
/** App use json. */
app.use(express.json());
/** App use cors to localhost:4200 */
app.use(cors({
    credentials: true,
    origin: "http://localhost:4200"
}));
/** Port for requests. */
const port = 5000;
/** Listening to port. */
app.listen(port, () => {
    console.log("Website served on http://localhost:" + port);
})
/** Router for user. */
app.use(apiUserPrefix, usersRouter);