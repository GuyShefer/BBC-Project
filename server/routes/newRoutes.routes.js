const express = require("express");
const route = new express.Router();
const newController = require("../controllers/newPost.controller");

route.post("/api/newPost", async (req, res) => {
  //   console.log(req.body);

  await newController.createNewPost(req, res);
  //   res.send(req.body);
});

module.exports = route;
