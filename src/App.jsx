import { useState } from 'react'
import './App.css'

import Header from './components/header/header'
import Footer from './components/footer/footer'
import Main from './components/main/main'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header />
      <Main />
      <Footer />
    </>
  )
}

export default App
