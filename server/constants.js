exports.errorName = {
  UNAUTHORIZED: "UNAUTHORIZED",
  USER_ALREADY_EXISTS: "USER_ALREADY_EXISTS",
  SERVER_ERROR: "SERVER_ERROR",
  INVALID_FIELD: "INVALID_FIELD"
};

exports.errorType = {
  // Common errors
  UNAUTHORIZED: {
    message: "Authentication required",
    statusCode: 401
  },
  USER_ALREADY_EXISTS: {
    message: "User already exists.",
    statusCode: 403
  },
  SERVER_ERROR: {
    message: "Server error.",
    statusCode: 500
  },

  // Custom Errors
  INVALID_FIELD: {
    message: "Field cannot be empty",
    statusCode: 400
  }
};
