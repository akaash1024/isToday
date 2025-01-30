const errorMiddleware = (err, req, res, next) => {
  const status = err.status || 500;
  const message = "BACKEND ERROR" || err.message;
  const extraDetails = "Error from Backend server" || err.extraDetails;

  return res.status(status).json({ status, message, extraDetails });
};

module.exports = errorMiddleware;
