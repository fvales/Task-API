import { Router } from 'express';

const taskRoutes = Router();

taskRoutes.get('/', (req, res) => {
  res.send('All Tasks!!!');
});

export default taskRoutes;
