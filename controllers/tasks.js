import Task from '../models/tasks.js';
import { asyncWrapper } from '../middleware/asyncWrapper.js';

export const getAllTasks = asyncWrapper(async (req, res) => {
  const tasks = await Task.find({});
  res.status(200).send({ tasks });
});

export const createTask = asyncWrapper(async (req, res) => {
  const task = await Task.create(req.body);
  res.status(201).send({ task });
});

export const getTaskById = asyncWrapper(async (req, res) => {
  const { id: taskId } = req.params;
  const task = await Task.findById(taskId);
  if (!task) {
    return res.status(404).send({ message: `No task with id: ${taskId}` });
  }
  res.status(200).send({ task });
});

export const updateTask = asyncWrapper(async (req, res) => {
  const { id: taskId } = req.params;
  const data = req.body;
  const task = await Task.findByIdAndUpdate(taskId, data, {
    new: true,
    runValidators: true,
  });
  if (!task) {
    return res.status(404).send({ message: `No task with id: ${taskId}` });
  }
  res.status(200).send({ task });
});

export const deleteTask = asyncWrapper(async (req, res) => {
  const { id: taskId } = req.params;
  const task = await Task.findByIdAndDelete(taskId);
  if (!task) {
    return res.status(404).send({ message: `No task with id: ${taskId}` });
  }
  res.status(200).send({ task });
});
