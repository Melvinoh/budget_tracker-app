import express from "express";
import cors from "cors"
import dotenv from "dotenv";
import authRoute from "./routes/authRoute.js"
import expencesRoute from "./routes/expencesRoute.js"
import incomeRoute from "./routes/incomeRoute.js"
import transactionRoute from "./routes/transactionRoute.js"
import db from './db.js'

dotenv.config();

const app = express();

//middle wares
app.use(express.json());
app.use(cors());

app.get('/', (req ,res) =>{
    res.send("hello muturi");
})

//routes

app.use('/api', transactionRoute);
app.use('/api', expencesRoute);
app.use('/api', authRoute);
app.use('/api', incomeRoute);;
const port = process.env.PORT

const server = () =>{
    app.listen(port, ()=>{
        console.log("you are listening to port", port);
    });
    db();
}
server();


