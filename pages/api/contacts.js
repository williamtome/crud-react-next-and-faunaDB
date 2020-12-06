import { q, client } from '../../utils/db'

const getAllContacts = () => {
  return client.query(
    q.Map(
      q.Paginate(q.Match('allContacts'), { size: 2 }),
      q.Lambda(x => q.Get(x))
    )
  )
}

const createContacts = data => {
  return client.query(q.Create(q.Collection('contacts'), { data }))
}

export default async function handler(req, res) {
  if(req.method === 'POST'){
    const contact = await createContacts(req.body)
    res.send(contact)
  } else {
    const contacts = await getAllContacts()
    res.json(contacts)
  }
}