// componentes
import Character from "./Characters/Characters";

const Body = (props) => {

    // estilos del contenedor de los characters (quise probar otra fomra de agregarlos)
    const style = {
        display: "flex",
        flexFlow: "row wrap",
        width: "100%",
        backgroundColor: "white",
        
    }

    return ( 

        <div style={style}>

            {
                props.characters.map((resp, id)=>(

                    <Character key={id} image={resp.image} name={resp.character} quote={resp.quote} />
                ))
            }

        </div>
        
    );
}
 
export default Body;