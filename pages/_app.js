//Este componente envuelve toda nuestra app

import { createContext } from 'react'
import '../styles/globals.css'


const ThemeContext= createContext('dark') //en esta parte  _app.js irían los providers

function MyApp({ Component, pageProps }) {
  return (
    <ThemeContext.Provider value='dark'>
  <Component {...pageProps} />
  </ThemeContext.Provider>
  )
       
}

export default MyApp

