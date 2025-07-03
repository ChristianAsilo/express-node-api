const { json } = require("express/lib/response");
const Contact = require("../models/contacts-model");
const asyncHandler = require("express-async-handler");

const getContact = asyncHandler(async (req, res) => {
  const contacts = await Contact.find();

  res.status(200).json(Contact);
});

const getContactId = asyncHandler(async (req, res) => {
  res.status(200).json({ message: `Get ${req.params.id}` });
});

const createContact = asyncHandler(async (req, res) => {
  const { name, email, phone } = req.body;
  if (!name || !email || !phone) {
    res.status(400);
    throw Error("Missing contact information");
  }
  const contact = await Contact.create(req.body);
  res.status(200).json(contact);
  res.status(201).json(contact);
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
