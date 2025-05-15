const express = require("express");
const router = express.Router();
const {
  getContact,
  createContact,
  deleteContact,
  getContactId,
  updateContact,
} = require("../controller/contracts-controller");

router.get("/", getContact);

router.post("/", createContact);

router.post("/:id", getContactId);

router.put("/:id", updateContact);

router.delete("/:id", deleteContact);

module.exports = router;
