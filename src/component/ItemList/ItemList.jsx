import ItemDetailContainer from '../ItemProducto/itemDetailContainer'
import './itemList.css'


const ItemList = ({items}) => {
    return (
        <>
        <div className="contenedor">
            {
                //map recorre el arreglo productos
                items.map((product) => {
                    return (
                        <ItemDetailContainer
                        key={product.id}
                        name={product.name}
                        image={product.image}
                        colour={product.colour}
                        stock={product.stock}
                        price={product.price}
                        detail={product.detail}
                        />
                    )
                })
            }
        </div>
        </>
    )
}

export default ItemList
