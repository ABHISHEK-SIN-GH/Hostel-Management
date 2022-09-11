import express from 'express';
import connection from './database/db.js';
import dotenv from 'dotenv';
import cors from 'cors';
import bodyParser from 'body-parser';
import routerStudent from './routes/studentRoute.js';
import routerEmployee from './routes/employeeRoute.js';
import routerRoom from './routes/roomRoute.js';
import routerFee from './routes/feeRoute.js';
import routerVisitor from './routes/visitorRoute.js';
import routerFeedback from './routes/feedbackRoute.js';

const app = express();
const PORT = 8000;

app.use(bodyParser.json({extended:true}));
app.use(bodyParser.urlencoded({extended:true}));
app.use(cors());

app.use('/student',routerStudent);
app.use('/employee',routerEmployee);
app.use('/room',routerRoom);
app.use('/fees',routerFee);
app.use('/visitor',routerVisitor);
app.use('/feedback',routerFeedback);

dotenv.config();
const username = process.env.DB_USERNAME
const password = process.env.DB_PASSWORD
connection(username,password);

app.listen(PORT, ()=>{console.log("server has started at port 8000 successfully!!!")})