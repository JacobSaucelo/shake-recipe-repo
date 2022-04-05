const errorHandler = (err, req, res, next) => {
  const statucCode = res.statusCode ? res.statusCode : 500;
  res.status(statucCode).json({
    success: false,
    message: err.message,
    stack: process.env.NODE_DEV === "production" ? null : err.stack,
  });
};

module.exports = {
  errorHandler,
};
