const express = require("express");
const { graphqlHTTP } = require("express-graphql");

const schema = require("./schema");

const app = express();

app.use(
  "/graphql",
  graphqlHTTP({
    graphiql: true,
    schema,
  })
);

app.get("/", (req, res) => {
  res.end("workkkkk");
});

const PORT = 8000 || process.env.PORT;
app.listen(PORT, () => {
  console.log(`app listen ${PORT}`);
});
