import express from 'express';
import chapterRouter from './routes/chapterRoutes.js';
import subchapterRouter from './routes/subchapterRoutes.js'
import bodyParser from 'body-parser';

const PORT=3000;
const app=express();

app.use(express.json());
app.use(bodyParser.urlencoded({extended:true}));

app.use('/api',chapterRouter);
app.use('/api',subchapterRouter);

app.listen(PORT,()=>{
    console.log(`Server is running on http://localhost:${PORT}`);
});
