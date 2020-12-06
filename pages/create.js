const { useFormik } = require("formik")

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
  const form = useFormik({
    initialValues: {
      name: '',
      email: '',
      title: ''
    },
    onSubmit: async(values) => {
      const ret = await post('/api/contacts', values)
      console.log(ret);
    }
  })
  return (
    <div>
      <h1>Create Contact</h1>
      <form onSubmit={form.handleSubmit}>
        <input type="text" 
          placeholder='Name' 
          name='name' 
          onChange={form.handleChange} 
          value={form.values.name} />
        
        <input type="text" 
          placeholder='E-mail' 
          name='email' 
          onChange={form.handleChange} 
          value={form.values.email} />
        
        <input type="text" 
          placeholder='Title' 
          name='title' 
          onChange={form.handleChange} 
          value={form.values.title} />

        <button type='submit'>Salvar</button>
      </form>
    </div>
  )
}

export default Create