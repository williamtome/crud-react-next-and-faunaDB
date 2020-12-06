import { getAllContacts, createContacts } from '../../services/contacts'

export default async function handler(req, res) {
  if(req.method === 'POST'){
    const contact = await createContacts(req.body)
    res.send(contact)
  } else {
    const contacts = await getAllContacts()
    res.json(contacts)
  }
}