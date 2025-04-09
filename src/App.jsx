import List from './List'
import { useState } from 'react'
function App() {

  const [article, setArticle] = useState('')

  const handleSubmit = () => {
    alert("ARTICOLO INVIATO")
  }

  return (
    <>
      <List/>
      <form onSubmit={handleSubmit}>
      <input 
          type="text"
          value={article}
          onChange={event => { setArticle(event.target.value) }}
      />
      <button>Invia</button>

      </form>
    </>
  )
}

export default App
