import React, { useState } from "react";
import ItemCount from '../ItemCount/ItemCount'
import './modalCarrito.css'
import img from "../../img/vaporizador1.png"
import img2 from "../../img/vaporizador2.png"
import img3 from "../../img/vaporizador3.png"
import ModalPago from "../Modal/ModalPago";

const modalCarrito = ({ isOpen, closeCarrito, titulo }) => {
    
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [isOpenPago, setIsOpenPago] = useState(false);

    const openPago = () => {
        setIsOpenPago(true)
    }
     const closePago = () => {
        setIsOpenPago(false)
    }

    return (
        <div className={`modalCarrito ${isOpen && 'modalCarrito-open'}`}>
            <h1 className="tituloCarrito">{titulo}</h1>
            <button className="botonCerrarCarrito" onClick={closeCarrito}>
                    X
                </button>
            <ItemCount nombre="VAPORESSO SKY SOLO PLUS" img={img} precio="400"/>
            <ItemCount nombre="VAPE PEN V2" img={img2} precio="250"/>
            <ItemCount nombre="Kit Voopoo Argus" img={img3} precio="600"/>
            <h3>Total de la Compra <span>$1250</span></h3>
            <div className="containerPago">
                <button className="botonPago" onClick={openPago}>Realizar Pago</button>
            </div>
            <ModalPago
                isOpen={isOpenPago}
                closePago={closePago}
            />
        </div>
    )
}

export default modalCarrito