import Task from '../models/tasks.js';

export const getAllTasks = (req, res) => {
  res.send('All Tasks From File!!!');
};

export const createTask = async (req, res) => {
  try {
    const task = await Task.create(req.body);
    res.status(201).send({ task });
  } catch (e) {
    res.status(500).send({ message: { e } });
  }
};

export const getTaskById = (req, res) => {
  res.send('A Task!!!');
};

export const updateTask = (req, res) => {
  res.send('Updated a task!!!');
};

export const deleteTask = (req, res) => {
  res.send('Deleted a task!!!');
};
