import "./Colaboradores.css"
import { AiOutlineUsergroupDelete } from "react-icons/ai"
import { RiHandHeartLine, RiHandHeartFill } from "react-icons/ri"

const Colaborador = (props) => {

    const { nombre, puesto, foto, /*equipo,*/ id, fav } = props.datos
    const { colorPrimario, eliminarColaborador, like } = props

    //Ternario -> condicion ? verdadero : falso

    return <div className="colaborador">
        <AiOutlineUsergroupDelete className="eliminar" onClick={() => eliminarColaborador(id)} />
        <div className="encabezado" style={{ backgroundColor: colorPrimario }}>
            <img src={foto} alt={nombre} />
        </div>
        <div className="info">
            <h4>{nombre}</h4>
            <h5>{puesto}</h5>
            { fav ? <RiHandHeartFill color='pink' onClick={() => like(id)} /> : <RiHandHeartLine color='grey' onClick={() => like(id)} /> }
        </div>
    </div>
}

export default Colaborador