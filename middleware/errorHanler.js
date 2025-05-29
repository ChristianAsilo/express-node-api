const errorHandler = (err, req, res, next) => {
  const statusCode = res.statusCode ? res.statusCode : 500;
  switch (statusCode) {
    case 400:
      res.json({
        title: "Validation",
        stackTrace: err.stack,
        message: err.message,
      });
      break;
    case 404:
      res.json({
        title: "Not found",
        stackTrace: err.stack,
        message: err.message,
      });

    default:
      break;
  }
};

module.exports = errorHandler;
