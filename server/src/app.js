const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.end("workkkkk");
});

const PORT = 8000 || process.env.PORT;
app.listen(PORT, () => {
  console.log(`app listen ${PORT}`);
});
