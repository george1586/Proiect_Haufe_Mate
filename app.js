import express from 'express';
import chapterRouter from './routes/chapterRoutes.js';
import subchapterRouter from './routes/subchapterRoutes.js'
import userRouter from './routes/userRoutes.js';
import bodyParser from 'body-parser';
import dotenv from 'dotenv';

const PORT=3000;
const app=express();

app.use(express.json());
app.use(bodyParser.urlencoded({extended:true}));

app.use('/api',chapterRouter);
app.use('/api',subchapterRouter);
app.use('/api',userRouter);

app.listen(PORT,()=>{
    console.log(`Server is running on http://localhost:${PORT}`);
});
