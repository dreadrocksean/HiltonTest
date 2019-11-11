const express = require("express");
const mongoose = require("mongoose");
const PORT = process.env.PORT || 4000;
const graphqlHTTP = require("express-graphql");
const cors = require("cors");
const schema = require("./schema/schema");
const { errorType } = require("./constants");

const uri =
  "mongodb+srv://test:1234@cluster0-ucfpv.mongodb.net/test?retryWrites=true&w=majority";

const app = express();

const getErrorCode = errorName => errorType[errorName];

mongoose.connect(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true
});
mongoose.connection.once("open", () => {
  console.log("connected to mongodb");
});

app.use(cors());

app.use(
  "/graphql",
  graphqlHTTP({
    schema,
    graphiql: true,
    customFormatErrorFn: err => {
      const { message, statusCode } = getErrorCode(err.message);
      return { message, statusCode };
    }
  })
);

app.listen(PORT, () => {
  console.log(`Listening for requests on port ${PORT} . . .`);
});
