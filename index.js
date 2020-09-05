const express = require("express");
const pRouter = require("./router");
const server = express();
const port = 5000;

server.use(express.json());
server.use(pRouter);

server.get("/", (req, res) => {
  res.json({
    message: "Welcome User",
  });
});

server.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
