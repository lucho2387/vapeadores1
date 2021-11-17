import React, {useState} from 'react'
import ModalCarrito from './ModalCarrito';


const CardWidget = (props) => {
    
    const[isOpenCarrito, setIsOpenCarrito] = useState(false)

    const openCarrito = () => {
         setIsOpenCarrito(true)
    }

    const closeCarrito = () => {
         setIsOpenCarrito(false)
    }
    
    return (
        <>
        <li className = {props.estiloLista}>
            <a href="#" onClick={openCarrito} className = {props.estiloEnlace}>
                <i className={props.icono} arial-hidden="true"></i>
                <span className={props.estiloSpan}>{props.valor}</span>
            </a>
        </li>
        <ModalCarrito
            titulo="Modal de Productos"
            isOpen={isOpenCarrito}
            closeCarrito={closeCarrito}
        />
        </>
    )
}

export default CardWidget
