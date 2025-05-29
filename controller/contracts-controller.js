const Contact = require("../models/contacts-model");

const asyncHandler = require("express-async-handler");
const getContact = asyncHandler(async (req, res) => {
  res.status(200).json(Contact);
});

const getContactId = asyncHandler(async (req, res) => {
  res.status(200).json({ message: `Get ${req.params.id}` });
});

const createContact = asyncHandler(async (req, res) => {
  console.log(`${req.params}`);

  res.status(201).json({ message: "Create CONTACTS" });
});
const updateContact = asyncHandler(async (req, res) => {
  res.status(200).json({ message: `Update ${req.params.id}` });
});

const deleteContact = asyncHandler(async (req, res) => {
  res.status(200).json({ message: `Delete ID: ${req.params.id}` });
});

module.exports = {
  getContact,
  getContactId,
  createContact,
  updateContact,
  deleteContact,
};
