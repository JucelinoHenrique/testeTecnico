import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import userRoutes from './routes/userRoutes';

const app = express();

// Configuração do CORS
app.use(cors()); 


app.use(bodyParser.json());

app.use('/api/users', userRoutes);

export default app;
