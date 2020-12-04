const { useFormik } = require("formik")

const Create = () => {
  const form = useFormik({
    initialValues: {
      name: '',
      email: '',
      title: ''
    },
    onSubmit: values => {
      console.log(values);
    }
  })
  return (
    <div>
      <h1>Create Contact</h1>
      <form onSubmit={form.handleSubmit}>
        <input type="text" placeholder='Name' name='name' onChange={form.handleChange} value={form.values.name>} />
        <input type="text" placeholder='E-mail' name='email' onChange={form.handleChange} value={form.values.email>} />
        <input type="text" placeholder='Title' name='title' onChange={form.handleChange} value={form.values.title>} />
        <button type='submit'>Salvar</button>
      </form>
    </div>
  )
}

export default Create