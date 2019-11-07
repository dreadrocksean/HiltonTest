const express = require("express");
const mongoose = require("mongoose");
const PORT = process.env.PORT || 4000;
const graphqlHTTP = require("express-graphql");
const cors = require("cors");
const schema = require("./schema/schema");
const uri =
  "mongodb+srv://test:1234@cluster0-ucfpv.mongodb.net/test?retryWrites=true&w=majority";

const app = express();

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
    graphiql: true
  })
);

app.listen(PORT, () => {
  console.log(`Listening for requests on port ${PORT} . . .`);
});
