import useSWR from 'swr'

const Index = () => {
  const { data } = useSWR('/api/contacts')
  if (!data) {
    return <p>Loading...</p>
  }
  return (
    <div>
      <h1>Olá LiveClass FaunaDB</h1>
      { 
        data.data.map(contact => {
          return (
            <div>
              {contact.data.name} - {contact.data.email}
            </div>
          )
        })
      }
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  )
}

export default Index
