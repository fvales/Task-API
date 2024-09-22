import { Router } from 'express';
import {
  createTask,
  deleteTask,
  getAllTasks,
  getTaskById,
  updateTask,
} from '../controllers/tasks.js';

const taskRoutes = Router();

taskRoutes.route('/').get(getAllTasks).post(createTask);
taskRoutes.route('/:id').get(getTaskById).patch(updateTask).delete(deleteTask);

export default taskRoutes;
