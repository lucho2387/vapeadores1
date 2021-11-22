import './itemDetail.css'

const itemDetail = ({isOpen, closeOpen, name, image, colour, price, detail}) => {
    return (
        <div className={`modalDetalle ${isOpen && 'modalDetalle-open'}`}>
            <div className="modal__dialog">
                <button className="botonCerrarDetalle"  onClick={closeOpen}>
                    X
                </button>
                <h1 className="tituloDetalle">{name}</h1>
                <div className="imagenDetalle">
                    <img className="imagenTamaño" src={image} />
                    <p className="textoDetalle">{detail}</p>
                </div>
                <p className="colorDetalle">{colour}</p>
                <span className="precioDetalle">Precio: $ {price}</span>
            </div>
        </div>
    )
}

export default itemDetail