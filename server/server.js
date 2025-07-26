import express from 'express';
import cors from 'cors';
import 'dotenv/config';
import e from 'express';

const app = express();
const port = 3000;

//middleware

app.use(express.json())
app.use(cors())