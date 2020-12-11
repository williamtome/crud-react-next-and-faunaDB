import useSWR from 'swr'
import Link from 'next/link'

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
      <h1 className='text-3x1 text-center'>Lista de Contatos</h1>
      <div className='w-2/4 m-auto my-8 text-center justify-center'>
        <p>
          <Link href='/create'>
            <a className="
            py-2 
            px-4 
            bg-green-500 
            text-white 
            font-semibold 
            rounded-lg 
            shadow-md 
            hover:bg-green-700 
            focus:outline-none 
            focus:ring-2 
            focus:ring-green-400 
            focus:ring-opacity-75">
              Criar contato
            </a>
          </Link>
        </p>
        { 
          data.data.map(contact => {
            return (
              <div className='mx-6 my-6' key={contact.ref['@ref'].id}>
                <strong>{contact.data.name}</strong> - {contact.data.email}
                <button 
                type='button' 
                className='
                mx-4
                py-1 
                px-4 
                bg-red-500 
                text-white 
                font-semibold 
                rounded-lg 
                shadow-md 
                hover:bg-red-700 
                focus:outline-none 
                focus:ring-2 
                focus:ring-red-400 
                focus:ring-opacity-75'
                onClick={()=>deleteContact(contact.ref['@ref'].id)}>Remove</button>
                <hr/>
              </div>
            )
          })
        }
        </div>
    </div>
  )
}

export default Index
