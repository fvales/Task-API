import { Router } from 'express';
import {
  createTask,
  deleteTask,
  getAllTasks,
  getTaskById,
  updateTask,
} from '../controllers/tasks.js';

const taskRoutes = Router();

taskRoutes.get('/', getAllTasks);
taskRoutes.get('/:id', getTaskById);
taskRoutes.post('/', createTask);
taskRoutes.patch('/:id', updateTask);
taskRoutes.delete('/:id', deleteTask);

export default taskRoutes;
