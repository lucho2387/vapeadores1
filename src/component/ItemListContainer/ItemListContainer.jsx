import './itemListContainer.css';

const ItemListContainer = (props) => {
    return (
        <section className="tituloPrincipal">
            <h1 style = {props.estilo}>{props.greeting}</h1>
        </section>
       
    ) 
}

export default ItemListContainer
