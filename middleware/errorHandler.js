export const errorHandler = (err, req, res, next) => {
  return res.status(err.statusCode ?? 500).send({ message: err.message });
};
