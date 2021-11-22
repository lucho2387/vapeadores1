import React, { useState } from "react";
import ItemCount from '../ItemCount/ItemCount'
import './modalCarrito.css'
import img from "../../assets/vaporizador1.png"
import img2 from "../../assets/vaporizador2.png"
import img3 from "../../assets/vaporizador3.png"
import ModalPago from "../Modal/ModalPago";

const modalCarrito = ({ isOpen, closeCarrito, titulo, totalCompra}) => {
    
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [isOpenPago, setIsOpenPago] = useState(false);

    const onOpenPago = () => {
        setIsOpenPago(true)
    }
    
    const onClosePago = () => {
        setIsOpenPago(false)
    }
    
    return (
        <div className={`modalCarrito ${isOpen && 'modalCarrito-open'}`}>
            <h1 className="tituloCarrito">{titulo}</h1>
            <button className="botonCerrarCarrito" onClick={closeCarrito}>
                X
            </button>
            <ItemCount nombre="VAPORESSO SKY SOLO PLUS" img={img} precio="400" stock="10"/>
            <ItemCount nombre="VAPE PEN V2" img={img2} precio="250" stock="5"/>
            <ItemCount nombre="Kit Voopoo Argus" img={img3} precio="600" stock="4"/>
            <h3>Total de la Compra <span>${totalCompra}</span></h3>
            <div className="containerPago">
                <button className="botonPago" onClick={onOpenPago}>Realizar Pago</button>
            </div>
            <ModalPago
                isOpen={isOpenPago}
                closePago={onClosePago}
            />
        </div>
    )
}

export default modalCarrito
