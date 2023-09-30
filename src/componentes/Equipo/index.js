import "./Equipo.css"
import Colaborador from "../Colaboradores"

const Equipo = (props) => {

    //Destructuracion
    const { colorPrimario, colorSecundario, titulo } = props.datos
    const { colaboradores } = props

    //Propiedades css
    const fondo = { backgroundColor: colorSecundario }
    const subrayado = { borderColor: colorPrimario }

    return <>
        { colaboradores.length > 0 &&
            <section className="equipo" style={ fondo }>
                <h3 style={ subrayado } >{ titulo }</h3>
                <div className="colaboradores">
                    {
                        colaboradores.map( (colaborador, index) => <Colaborador 
                            datos={colaborador} 
                            key={index} 
                            colorPrimario={colorPrimario}
                        /> )
                    }
                </div>
            </section>
        }
    </>
}

export default Equipo