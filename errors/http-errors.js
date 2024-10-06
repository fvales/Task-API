class HttpError extends Error {
  constructor(message, statusCode) {
    super(message);
    this.statusCode = statusCode;
  }
}

export const createNewHttpError = (message, statusCode) => {
  return new HttpError(message, statusCode);
};
