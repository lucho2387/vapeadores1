import './item.css'

const Item = (props) => {
    return (
        <div className="contenedorProducto"  key={props.codigo}>
            <h1 className="tituloProducto">{props.nombre}</h1>
            <img className="imagenProducto1" src={props.imagen} alt="producto1" />
            <p>{props.color}</p>
            <span className="spanProducto">Cantidad: {props.stock}</span>
            <span className="tituloProducto">Precio: $ {props.precio}</span>
            <button className="botonProducto">Ver Detalle</button>
        </div>
    )
}

export default Item