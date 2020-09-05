const express = require("express");
const posts = require("./data/db");
const {
  findById,
  find,
  insert,
  update,
  remove,
  findPostComments,
  findCommentById,
  insertComment,
} = require("./data/db");
const router = express.Router();

router.get("/api/posts", (req, res) => {
  posts
    .find()
    .then((posts) => {
      res.status(200).json(posts);
    })
    .catch((error) => {
      console.log(error);
      res.status(500).json({
        error: "There was an error while saving the comment to the database",
      });
    });
});

router.get("/api/posts/:id", (req, res) => {
  posts
    .findById(req.params.id)
    .then((posts) => {
      if (posts) {
        res.status(201).json(posts);
      } else {
        res
          .status(404)
          .json({ message: "The post with the specified ID does not exist" });
      }
    })
    .catch((error) => {
      console.log(error);
      res
        .status(500)
        .json({ error: "The post information could not be retrieved" });
    });
});

module.exports = router;
