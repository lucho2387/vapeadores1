import React, {useState} from 'react'
import ModalCarrito from './ModalCarrito';


const CardWidget = (props) => {
    
    const[isOpenCarrito, setIsOpenCarrito] = useState(false)

    const onOpenCarrito = () => {
        setIsOpenCarrito(true)
    }

    const onCloseCarrito = () => {
        setIsOpenCarrito(false)
    }
    
    return (
        <>
        <li className = {props.estiloLista}>
            <a href="#" onClick={onOpenCarrito} className = {props.estiloEnlace}>
                <i className={props.icono} arial-hidden="true"></i>
                <span className={props.estiloSpan}>{props.valor}</span>
            </a>
        </li>
        <ModalCarrito
            titulo="Modal de Productos"
            isOpen={isOpenCarrito}
            totalCompra = "1250"
            closeCarrito={onCloseCarrito}
        />
        </>
    )
}

export default CardWidget
