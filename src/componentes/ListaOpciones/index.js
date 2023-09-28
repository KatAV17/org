import "./ListaOpciones.css"

const ListaOpciones = (props) => {

    //Metodo map -> arreglo.map( (equipo, index) => {
    //  return <option></option>
    //})
    const equipos = [
        "Programación",
        "Front End",
        "Data Science",
        "Devops",
        "UX y Diseño",
        "Móvil",
        "Innovación y Gestión",
    ]

    return <div className="lista-opciones">
        <label>{ props.titulo }</label>
        <select placeholder={ props.placeholder }>
            { equipos.map( (equipo, index) => <option key={index}>{equipo}</option>)}
        </select>
    </div>
}

export default ListaOpciones