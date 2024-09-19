import express from 'express';
import taskRoutes from './routes/tasks.js';

const PORT = 3000;
const app = express();

// Middleware
app.use(express.json());

app.use('/api/v1/tasks', taskRoutes);

app.listen(PORT, () => {
  console.log(`Listening ${PORT}`);
});

app.get('/', (req, res) => {
  res.send('Hello World!!!');
});
