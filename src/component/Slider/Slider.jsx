import './slider.css';

const Slider = ({estilo, greeting}) => {
    return (
        <section className="tituloPrincipal">
            <h1 style = {estilo}>{greeting}</h1>
        </section>
    ) 
}

export default Slider
