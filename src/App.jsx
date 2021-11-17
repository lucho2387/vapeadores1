//Combinacion de codigo js y html (JSX- libreria)
// JSX -> JavaScript Xml

// JSX Y HTML
/* class -> className */
import React from 'react'
import Header from './component/Header/Header';
import ItemListContainer from './component/ItemListContainer/ItemListContainer';
import ItemListContainer2 from './component/ItemListContainer/ItemListContainer2';



//funcion anonima (arrowfunction)
//Otra forma de definir la funcion
const App = () => {
  return (
    <> 
      <Header />
      <ItemListContainer
       greeting="Bienvenidos"
      />
      <ItemListContainer2 />
   
    </>
  )
}

export default App;
