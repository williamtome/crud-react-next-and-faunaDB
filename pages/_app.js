import React from 'react'
import '../css/style.css'

const App = ({ Component, pageProps }) => {
  return (
    <div className='container m-auto'>
      <Component {...pageProps} />
    </div>
  )
}

export default App