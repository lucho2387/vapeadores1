import React, { useState } from "react"
import ItemDetail from './ItemDetail'
import './itemDetailContainer.css'

const itemDetailContainer = ({id, name, image, colour, stock, price, detail}) => {
    
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [isOpenDetail, setIsOpenDetail] = useState(false);
    

    const onOpenDetalle = () => {
        setIsOpenDetail(true)
    }
    
    const onCloseDetalle = () => {
        setIsOpenDetail(false)
    }

    return (
        <div className="contenedorProducto"  key={id}>
            <h1 className="tituloProducto">{name}</h1>
            <img className="imagenProducto1" src={image} alt="producto1" />
            <p>{colour}</p>
            <span className="spanProducto">Cantidad: {stock}</span>
            <span className="tituloProducto">price: $ {price}</span>
            <button className="botonProducto" onClick={onOpenDetalle}>Ver Detalle</button>
            <ItemDetail 
                isOpen = {isOpenDetail}
                name = {name}
                image = {image}
                colour =  {colour}
                price = {price}
                detail = {detail}
                closeOpen = {onCloseDetalle}
            />
        </div>
    )
}

export default itemDetailContainer
