import express from 'express';
import cors from 'cors';
import router from '../routes/index';

const app = express();

app.use(cors());

app.get('/', async (req, res) => {
    res.send('Hello from DALL-E!');
})

app.use('/api', router);

export default app; 