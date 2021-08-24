// componentes
import Body from "./body/Body";
import Footer from "./footer/Footer";
import Header from "./header/Header";
import Loading from "./loading/Loading";

// extras
import { useEffect, useState } from "react";
import axios from "axios";

const Landing = () => {

    // buscador
    const [characters, setCharacters] = useState([]);
    const [listaCharacters , setListaCharacters] = useState([]);
    const [busqueda , setBusqueda] = useState("");
    const [loading , setLoading] = useState(true);

    
    const url= "https://thesimpsonsquoteapi.glitch.me/quotes?count=15";

    // hacemos la peticion y lo guadamos en una funcion para llamarla luego en el useEffect. Guardamos en ambos estados para luego manipularlos
    const peticion = async () => {

        await axios.get(url).then((resp)=>{
            setCharacters(resp.data);
            setListaCharacters(resp.data);
            setLoading(false)

        })
        .catch((e)=>{console.log(e);})
    }

    // usamos el useEffect para estar todo el tiempo renderizando la api.
    useEffect(() => {
        peticion();
    }, []);

    // agarramos el valor que viene por el input y le aplicamos la funcion filtrar
    const handleChange = e => {

        setBusqueda(e.target.value); // vamos a mostrarle al usuario lo que esta escribiendo
        filtrar(e.target.value); // vamos a filtrar lo que viene por value y asignarselo al estado setCharacters
    }

    // creamos una funcion que filtre a el estado "lista de characters", en este vamos a tener toda la api. Y el filtrado, lo deje en characters
    const filtrar = (terminoBusqueda) =>{
        let resultado = listaCharacters.filter((elemento)=>{
            if(elemento.character.toString().toLowerCase().includes(terminoBusqueda.toLowerCase()) || elemento.quote.toString().toLowerCase().includes(terminoBusqueda.toLowerCase())){
                return elemento;
            }
        })
        // vamos a tirar el filtrado al otro estado, a donde vamos a mostrar lo filtrado para que no toque el estado en donde esta toda la api
        setCharacters(resultado)
    }

    // PONER LOADING 

    if(loading){

        return (
        
            <div>
                
                <Header 
                    value={busqueda}
                    handle={handleChange}
                />

                <Loading 
                    loading={loading}
                />

            </div>           

        )
    } else {

        return (

            <div>

                <Header 
                    value={busqueda}
                    handle={handleChange} 
                />

                <Body 
                    characters={characters} 
                />

                <Footer/>

            </div>

        );
    }
}
 
export default Landing;