const faunadb = require('faunadb')
const q = faunadb.query

const client = new faunadb.Client({
  secret: process.env.FAUNA_SECRET
})

const createContacts = data => {
  return client.query(q.Create(q.Collection('contacts'), {
    data
  }))
}
const getContactByRef = ref => {
  return client.query(q.Get(q.Ref(q.Collection('contacts'), ref)))
}
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
const getContactByEmail = email => {
  return client.query(q.Get(q.Match(q.Index('contactByEmail'), [email])))
}
/*
createContacts({
    name: 'William',
    email: 'william@teste.com',
    title: 'Developer'
}).then(ret => console.log(ret))
*/

/*
getContactByRef(282768648215462400)
    .then(ret => console.log(ret))
*/

/*
getAllContacts().then(all => console.log(all))
*/

getContactByEmail('contato@devpleno.com')
  .then(contato => console.log(contato))