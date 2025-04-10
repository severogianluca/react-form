import alcolici from './data/alcolici';
import { useState } from 'react'
function App() {

  const [article, setArticle] = useState(alcolici)
  const [newArticles, setNewArticle] = useState('');

  const addArticle = event =>{
    event.preventDefault();
    const newAlcolic = ([...article, newArticles]);
    setArticle(newAlcolic);
    console.log(newAlcolic);
    setNewArticle("");
  }

  const removeAlcolic = (deleteAlcolic) => {
    const newArticles = article.filter((element, index) => {
      return deleteAlcolic !== index

    })
    setArticle(newArticles);
  }


  return (
    <>
    <div>
        <h1>Lista alcolici</h1>
    </div>
    <ul>
        {article.map((element,index) => (
          <li key={index}>
            {element}
          <button onClick={() => removeAlcolic(index)}>Elimina</button>
          </li>
        ))}
    </ul> 


    <form onSubmit={addArticle}>
    <input 
        type="text"
        value={newArticles}
        onChange={event => { setNewArticle(event.target.value) }}
    />
    <button>Invia</button>
    </form>
    </>
  )
}

export default App
