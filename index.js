import express from 'express';
import taskRoutes from './routes/tasks.js';
import 'dotenv/config';
import { connectDB } from './db/connect.js';

const PORT = process.env.PORT ?? 3000;
const app = express();

const start = async (connectionString) => {
  try {
    await connectDB(connectionString);
    app.listen(PORT, () => {
      console.log(`Listening ${PORT}`);
    });
  } catch (e) {
    console.log(e);
  }
};

start(process.env.MONGO_URI);

// Middleware
app.use(express.json());

app.use('/api/v1/tasks', taskRoutes);

app.get('/', (req, res) => {
  res.send('Hello World!!!');
});
