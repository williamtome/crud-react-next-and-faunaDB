import { deleteContact } from "../../../services/contacts";

export default async function handler(req, res) {
  await deleteContact(req.query.ref);
  res.json({ OK: true })
}