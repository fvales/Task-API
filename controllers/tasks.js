import Task from '../models/tasks.js';

export const getAllTasks = async (req, res) => {
  try {
    const tasks = await Task.find({});
    res.status(200).send({ tasks });
  } catch (e) {
    res.status(500).send({ message: e });
  }
};

export const createTask = async (req, res) => {
  try {
    const task = await Task.create(req.body);
    res.status(201).send({ task });
  } catch (e) {
    res.status(500).send({ message: { e } });
  }
};

export const getTaskById = async (req, res) => {
  try {
    const { id: taskId } = req.params;
    const task = await Task.findById(taskId);
    if (!task) {
      return res.status(404).send({ message: `No task with id: ${taskId}` });
    }
    res.status(200).send({ task });
  } catch (e) {
    res.status(500).send({ message: e });
  }
};

export const updateTask = async (req, res) => {
  try {
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
  } catch (e) {
    res.status(500).send({ message: e });
  }
};

export const deleteTask = async (req, res) => {
  try {
    const { id: taskId } = req.params;
    const task = await Task.findByIdAndDelete(taskId);
    if (!task) {
      return res.status(404).send({ message: `No task with id: ${taskId}` });
    }
    res.status(200).send({ task });
  } catch (e) {
    res.status(500).send({ message: e });
  }
};
