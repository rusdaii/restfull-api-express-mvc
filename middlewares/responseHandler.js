const responseHandler = (res, data, statusCode = 200) => {
  if (statusCode === 204) {
    res.status(statusCode).send();
  } else {
    res.status(statusCode).json(data);
  }
};

module.exports = responseHandler;
