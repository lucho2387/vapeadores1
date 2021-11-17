import Item from '../ItemProducto/Item'
import './itemList.css'


const ItemList = ({items}) => {

    return (
        <>
        <div className="contenedor">
            {
                //map recorre el arreglo productos
                items.map((producto) => {
                    return (
                        <Item
                        key={producto.codigo}
                        nombre={producto.nombre}
                        imagen={producto.imagen}
                        color={producto.color}
                        stock={producto.stock}
                        precio={producto.precio}
                        />
                    )
                })
            }
        </div>
        </>
    )
}

export default ItemList