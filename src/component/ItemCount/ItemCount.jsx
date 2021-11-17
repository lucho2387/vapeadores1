import { Fragment,useState } from "react";
import './ItemCount.css'; 


const ItemCount = (props) => {
    
    //Inicial
    const [numero, setNumero] = useState(1)

    const Incrementar = () => {
        setNumero(numero + 1);
    }

    const Disminuir = () => {
        setNumero(numero > 0 ? numero - 1 : numero);
    }


    return (
        <Fragment>
            <h2 className="nombreProducto">{props.nombre}</h2>
            <div className="container">
                <img className="imagenProducto" src={props.img} alt="" />
                <button className="botonDisminuir"  onClick={Disminuir}>-</button>
                <h3 className="cantidad">{`${numero}`}</h3>
                <button className="botonIncrementar" onClick={Incrementar}>+</button>
                <h4 className="precioProducto">Precio<span className="spanPrecio"> $ {props.precio}</span></h4>
             </div>
        </Fragment>
    )
}

export default ItemCount
