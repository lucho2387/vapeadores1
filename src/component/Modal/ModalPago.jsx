import React from 'react'
import './modalPago.css'

const ModalPago = ({isOpen, closePago}) => {
    return (
        <div className={`modalPago ${isOpen && 'modalPago-open'}`}>
            <div className="modal__dialogPago">
                <h1>El Pago se realizo correctamente</h1>
                <button className="botonCerrarPago2" onClick={closePago}>
                    X
                </button>
            </div>
        </div>
    )
}

export default ModalPago