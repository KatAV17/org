import { useState } from "react"
import "./Formulario.css"
import CampoTexto from "../CampoTexto"
import ListaOpciones from "../ListaOpciones"
import Boton from "../Boton"

const Formulario = (props) => {

    //Estados
    const [nombre, actulizarNombre] = useState("")
    const [puesto, actulizarPuesto] = useState("")
    const [foto, actulizarFoto] = useState("")
    const [equipo, actualizarEquipo] = useState("")

    //Destructuracion
    const { registrarColaborador, equipos } = props

    const manejarEnvio = (e) => {
        e.preventDefault()
        let datosAEnviar = {
            nombre,
            puesto,
            foto,
            equipo,
        }
        registrarColaborador(datosAEnviar)
    }

    return <section className='formulario'>
        <form onSubmit={manejarEnvio}>
            <h2>Rellena el formulario para crear el colaborador.</h2>
            <CampoTexto 
                titulo="Nombre"
                placeholder='Ingresar nombre'
                required valor={nombre}
                actualizarValor={actulizarNombre}
            />
            <CampoTexto
                titulo="Puesto"
                placeholder='Ingresar puesto'
                required valor={puesto}
                actualizarValor={actulizarPuesto}
            />
            <CampoTexto
                titulo="Foto"
                placeholder='Ingresar enlace de foto'
                required valor={foto}
                actualizarValor={actulizarFoto}
            />
            <ListaOpciones
                valor={equipo}
                actualizarEquipo={actualizarEquipo}
                equipos={equipos}
            />
            <Boton>
                Crear
            </Boton>
        </form>
    </section>
}

export default Formulario