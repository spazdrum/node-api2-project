const express = require("express");
const server = express();
const port = 5000;

server.use(express.json());

server.get("/", (req, res) => {
  res.json({
    message: "Welcome User",
  });
});

server.listen(port, () => {
  console.log(`Server is running on prot ${port}`);
});
