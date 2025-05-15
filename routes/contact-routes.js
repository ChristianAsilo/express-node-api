const express = require("express");
const router = express.Router();

router.route("/").get((req, res) => {
  res.status(200).json({ message: "GET ALL CONTACTS" });
});

router.route("/").post((req, res) => {
  res.status(200).json({ message: "Create" });
});

router.route("/:id").get((req, res) => {
  res.status(200).json({ message: `Get ${req.params.id}` });
});

router.route("/:id").put((req, res) => {
  res.status(200).json({ message: `Update ${req.params.id}` });
});

router.route("/:id").delete((req, res) => {
  res.status(200).json({ message: `Delete ID: ${req.params.id}` });
});

module.exports = router;
