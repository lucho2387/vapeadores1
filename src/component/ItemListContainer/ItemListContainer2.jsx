import React, {useState, useEffect} from 'react'
import ItemList from '../ItemList/ItemList';
import './itemListContainer.css';
import {productos} from '../ItemProducto/Items'

const ItemListContainer2 = () => {
  
  const [items, setItems] = useState([])
  
  //Renderiza solo 1 vez (ejemplo:llama a la api 1 vez para cargar los productos)
  useEffect(() => {
      const cargarProductos = () => {
        return new Promise((resolve, reject) => {
          setTimeout(() => {
              resolve(productos)
          }, 2000);
        })
      }
    
      cargarProductos()
        .then((response) => {
          setItems(response);
          console.log(response);
        })
        .catch((error) => console.log(error))
  
  }, []);
  
  
  return (
        <>
          <ItemList items={items}/>
        </>
       
    ) 
}

export default ItemListContainer2