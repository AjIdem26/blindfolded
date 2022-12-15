import {connect, ConnectOptions} from "mongoose";
/** Function that connects us to database. */
export const dbConnect = () => {
    connect(process.env.MONGO_URI!, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    } as ConnectOptions).then( () => {
        console.log("Connect success")
    }, (err) => {
        console.log(err);
    })
}