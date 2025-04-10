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
    <div className='container'>
    <div>
        <h1>Lista alcolici</h1>
    </div>
    <div className='container-list'>
    <ul class="list-group">
        {article.map((element,index) => (
          <li  class="list-group-item d-flex justify-content-between align-items-center" key={index}>
            {element}

          <button 
          onClick={() => removeAlcolic(index)}
          type="button" class="btn btn-danger">Elimina
          </button>
          </li>

        ))}
    </ul> 



    </div>
    <form onSubmit={addArticle}>
      <div className="d-flex justify-content-between align-items-center mt-5 gap-3">
    <div class="form-floating mt-5 dimensione">
    <input 
        class="form-control"
        id='list'
        type="text"
        value={newArticles}
        onChange={event => { setNewArticle(event.target.value) }}
    />
     <label for="list">Aggiungi al carrello </label>
    </div>
    <button  type="button" class="btn btn-primary mt-3">Invia</button>
    </div>
    </form>
    </div>
    
    </>
  )
}

export default App
