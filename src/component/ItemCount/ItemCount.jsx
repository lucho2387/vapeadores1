import { Fragment,useState } from "react";
import './ItemCount.css'; 


const ItemCount = ({nombre, img, precio, stock}) => {
    
    //Inicial
    const [numero, setNumero] = useState(1)

    const onIncrease = () => {
        setNumero(numero < stock ? numero + 1 : numero);
    }

    const onDecrease = () => {
        setNumero(numero > 1 ? numero - 1 : numero);
    }
   
    return (
        <Fragment>
            <h2 className="nombreProducto">{nombre}</h2>
            <div className="container">
                <img className="imagenProducto" src={img} alt="" />
                <button className="botonDisminuir"  onClick={onDecrease}>-</button>
                <h3 className="cantidad">{`${numero}`}</h3>
                <button className="botonIncrementar" onClick={onIncrease}>+</button>
                <h4 className="precioProducto">Total<span className="spanPrecio"> $ {precio * numero}</span></h4>
            </div>
        </Fragment>
        
    )
}

export default ItemCount
