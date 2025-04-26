import express from 'express';
import chapterRouter from './routes/chapterRoutes.js';
import subchapterRouter from './routes/subchapterRoutes.js'
import userRouter from './routes/userRoutes.js';
import bodyParser from 'body-parser';
import authRouter from './routes/authRoutes.js';
import cors from 'cors';
import cookieSession from 'cookie-session';
import { isAdmin, verifyToken } from './services/authJwt.js';

const PORT=3000;
const app=express();

app.use(cors());

app.use(
    cookieSession({
      name: "cookie-session",
      keys: ["TOKEN_SECRET"], 
      httpOnly: true,
      sameSite: 'strict'
    })
);

app.use(express.json());
app.use(bodyParser.urlencoded({extended:true}));

app.use('/api',chapterRouter);
app.use('/api',subchapterRouter);
app.use('/api',userRouter);
app.use('/api',authRouter);

app.listen(PORT,()=>{
    console.log(`Server is running on http://localhost:${PORT}`);
});
