// estilos
import "./Character.css"

const Character = (props) => {
    
    return ( 

        <div className="character-wrapper">

            <img 
                alt="img" 
                src={props.image}>

            </img>

            <h4>{props.name}</h4>

            <q>{props.quote}</q>

        </div>
    );
}
 
export default Character;