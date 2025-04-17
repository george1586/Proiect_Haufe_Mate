import express from 'express';
import chapterRouter from './routes/chapterRoutes.js';
import bodyParser from 'body-parser';

const PORT=3000;
const app=express();

app.use('/api',chapterRouter);

app.listen(PORT,()=>{
    console.log(`Server is running on http://localhost:${PORT}`);
});
