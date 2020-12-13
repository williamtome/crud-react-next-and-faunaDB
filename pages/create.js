import { useFormik } from 'formik'
import { useRouter } from 'next/router'

const post = async(url, data) => {
  const res = await fetch(url, {
    method: 'post',
    body: JSON.stringify(data),
    headers: {
      Accept: 'application/json',
      "Content-Type": 'application/json'
    }
  })
  const returnedData = await res.json()
  return returnedData
}

const Create = () => {
  const router = useRouter()
  const form = useFormik({
    initialValues: {
      name: '',
      email: '',
      title: ''
    },
    onSubmit: async(values) => {
      const ret = await post('/api/contacts', values)
      router.push('/')
    }
  })
  return (
    <div className='w-2/4 m-auto my-8 text-center justify-center col-span-6 sm:col-span-3'>
      <h1 className='my-5'>Novo Contato</h1>
      <form onSubmit={form.handleSubmit}>
        <input type="text" 
          placeholder='Name' 
          name='name' 
          onChange={form.handleChange} 
          value={form.values.name} 
          className='mt-3 
          block
          py-2 
          w-96
          m-auto
          shadow-sm 
          sm:text-sm 
          border-gray-500 
          rounded-md'/>
        
        <input type="text" 
          placeholder='E-mail' 
          name='email' 
          onChange={form.handleChange} 
          value={form.values.email} 
          className='mt-3 
          block 
          w-96
          py-2          
          m-auto
          shadow-sm 
          sm:text-sm 
          border-gray-500 
          rounded-md'/>
        
        <input type="text" 
          placeholder='Title' 
          name='title' 
          onChange={form.handleChange} 
          value={form.values.title} 
          className='mt-3 
          block 
          w-96
          py-2
          m-auto
          shadow-sm 
          sm:text-sm 
          border-gray-500 
          rounded-md'/>

        <button
          className='
          my-4
          py-2 
          px-4 
          bg-blue-500 
          text-white 
          font-semibold 
          rounded-lg 
          shadow-md 
          hover:bg-blue-700 
          focus:outline-none 
          focus:ring-2 
          focus:ring-blue-400 
          focus:ring-opacity-75"'
          type='submit'>Salvar</button>
      </form>
    </div>
  )
}

export default Create