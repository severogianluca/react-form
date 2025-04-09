import alcolici from "./data/alcolici"
function List() {
    return (
    <>  
    <div>
        <h1>Lista alcolici</h1>
    </div>
    <ul>
        {alcolici.map((element, index) => (
          <li key={index}>{element.etichetta}</li>
        ))}
    </ul> 
    </>

    )
}

export default List