const { GraphQLError } = require("graphql");

class ValidationError extends GraphQLError {
  constructor(errors) {
    // super(errors[0].message);
    super("The request is invalid.");
    console.log(errors);
    this.state = errors.reduce((result, error) => {
      if (Object.prototype.hasOwnProperty.call(result, error.key)) {
        result[error.key].push(error.message);
      } else {
        result[error.key] = [error.message];
      }
      return result;
    }, {});

    console.log("state: ", this.state);
  }
}

module.exports = ValidationError;
