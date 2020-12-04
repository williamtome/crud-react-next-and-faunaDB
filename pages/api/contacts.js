import { q, client } from '../../utils/db'

const getAllContacts = () => {
  return client.query(
    q.Map(
      q.Paginate(q.Match('allContacts'), {
        size: 2
      }),
      q.Lambda(x => q.Get(x))
    )
  )
}

export default async function handler(req, res) {
  const contacts = await getAllContacts()
  
  res.json(contacts)
}