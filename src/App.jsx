import List from './List'
import { useState } from 'react'
function App() {

  const [article, setArticle] = useState('')

  const hadleSubmit = () => {
    alert("ARTICOLO INVIATO")
  }

  return (
    <>
      <List/>
      
    </>
  )
}

export default App
