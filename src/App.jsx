//Combinacion de codigo js y html (JSX- libreria)
// JSX -> JavaScript Xml

// JSX Y HTML
/* class -> className */
import React from 'react'
import Header from './component/Header/Header';
import Slider from './component/Slider/Slider';
import ItemListContainer from './component/ItemListContainer/ItemListContainer';



//funcion anonima (arrowfunction)
//Otra forma de definir la funcion
const App = () => {
  return (
    <> 
      <Header />
      <Slider
        greeting="Bienvenidos"
      />
      <ItemListContainer />
    </>
  )
}

export default App;
