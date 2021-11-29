const express = require("express");
const { graphqlHTTP } = require("express-graphql");
const cors = require("cors");

const schema = require("./schema");
const { connectDB } = require("./config/database");

const SongModel = require("./models/song");

const app = express();

connectDB();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(
  "/graphql",
  graphqlHTTP({
    graphiql: true,
    schema,
  })
);

app.get("/", async (req, res) => {
  const data = await SongModel.findAll({});
  res.json({ data });
});

const PORT = 8000 || process.env.PORT;
app.listen(PORT, () => {
  console.log(`app listen ${PORT}`);
});
