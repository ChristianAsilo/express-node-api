const getContact = async (req, res) => {
  res.status(200).json({ message: "GET ALL CONTACTS" });
};

const getContactId = async (req, res) => {
  res.status(200).json({ message: `Get ${req.params.id}` });
};

const createContact = async (req, res) => {
  console.log(`${req.params}`);

  res.status(201).json({ message: "Create CONTACTS" });
};
const updateContact = async (req, res) => {
  res.status(200).json({ message: `Update ${req.params.id}` });
};

const deleteContact = async (req, res) => {
  res.status(200).json({ message: `Delete ID: ${req.params.id}` });
};

module.exports = {
  getContact,
  getContactId,
  createContact,
  updateContact,
  deleteContact,
};
