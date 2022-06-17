const express = require("express");
const { graphqlHTTP } = require("express-graphql");
const colors = require("colors");
const cors = require("cors");
require("dotenv").config();
const PORT = process.env.PORT || 4000;
const connectDB = require("./config/db");
const schema = require("./schema/schema");

const app = express();

connectDB();
app.use(cors());
app.use(
  "/graphql",
  graphqlHTTP({
    schema,
    graphiql: true,
  })
);

app.listen(PORT, () => console.log(`Server runing on port ${PORT}`));
