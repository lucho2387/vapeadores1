import React, {useState, useEffect} from 'react'
import ItemList from '../ItemList/ItemList';
// import {products} from '../ItemProducto/Items'

const ItemListContainer = () => {
  
  const [items, setItems] = useState([])
  
  //Renderiza solo 1 vez (ejemplo:llama a la api 1 vez para cargar los productos)
  useEffect(() => {
      // const loadProducts = () => {
      //   return new Promise((resolve, reject) => {
      //     setTimeout(() => {
      //         resolve(products)
      //     }, 2000);
      //   })
      // }
    
      // loadProducts()
      //   .then((response) => {
      //     setItems(response);
      //     console.log(response);
      //   })
      //   .catch((error) => console.log(error))
      
      //Consulta al archivo JSON y FETCH es una promesa
      fetch("JSON/datos.json")
        //pasamos al formato json 
        .then(response => response.json())
        .then(data => {
          setTimeout(() => {
            setItems(data)
          }, 2000);
          console.log(data)
        })
        .catch((error) => console.log(error))
  }, []);
  return (
        <>
          <ItemList items={items}/>
        </>
    ) 
}

export default ItemListContainer