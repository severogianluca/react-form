import alcolici from './data/alcolici';
import { useState } from 'react'
function App() {

  const [article, setArticle] = useState(alcolici)
  const [newArticle, setNewArticle] = useState('');

  const addArticle = event =>{
    event.preventDefault();
    const newAlcolic = ([...article, newArticle])
    setArticle(newAlcolic)
    console.log(newAlcolic)
    
  }

  return (
    <>
    <div>
        <h1>Lista alcolici</h1>
    </div>
    <ul>
        {article.map((element,index) => (
          <li key={index}>{element}</li>
        ))}
    </ul> 


    <form onSubmit={addArticle}>
    <input 
        type="text"
        value={newArticle}
        onChange={event => { setNewArticle(event.target.value) }}
    />
    <button>Invia</button>
    </form>
    </>
  )
}

export default App
