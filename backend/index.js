import express from 'express'; 
import dotenv from 'dotenv'; 
import connectDb from './config/db.js';
dotenv.config(); 
const app = express(); 
app.use(express.json());


const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
    connectDb();
    console.log(`Server is running on port ${PORT}`);
});