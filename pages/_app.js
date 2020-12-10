import React from 'react'
import '../css/style.css'

const App = ({ Component, pageProps }) => {
  return (
    <div>
      <h1>MyApp</h1>
      <Component {...pageProps} />
    </div>
  )
}

export default App