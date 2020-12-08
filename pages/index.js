import useSWR from 'swr'

const deleteRequest = async(url) => {
  const res = await fetch(url, {
    method: 'DELETE'
  })
  const data = await res.json()
  return data
}

const Index = () => {
  const { data, mutate } = useSWR('/api/contacts')
  const deleteContact = async(ref) => {
    await deleteRequest('/api/contacts/'+ref)
    mutate()
  }
  if (!data) {
    return <p>Loading...</p>
  }
  return (
    <div>
      <h1>Olá LiveClass FaunaDB</h1>
      { 
        data.data.map(contact => {
          return (
            <div key={contact.ref['@ref'].id}>
              {contact.data.name} - {contact.data.email}
              <button type='button' onClick={()=>deleteContact(contact.ref['@ref'].id)}>Remove</button>
              <hr/>
            </div>
          )
        })
      }
    </div>
  )
}

export default Index
