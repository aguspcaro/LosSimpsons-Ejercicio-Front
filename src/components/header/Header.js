// componentes
import Logo from "../logo/Logo";

// estilos
import "./Header.css";

// extras
import { BiSearch } from "react-icons/bi";
import LogoHeader from "../../assets/paisanosLogoNuevo.svg";

const Header = (props) => {

    return ( 

        <nav className="nav-wrapper">

            <div className="logoHeader">

                <Logo image={LogoHeader} />

            </div>

            <div className="nav-search-wrap">

                <input 
                    placeholder="Buscá tu simposon aquí" 
                    type="text" 
                    name="search"
                    onChange={props.handle}
                    value={props.value} // le vamos a mostrar al usuario lo que hay en el estado busqueda. Este se alimenta de la funcion handleChange
                />

                <button
                    className="search-button"
                    type="button">
                    <BiSearch/>
                </button>

            </div>

            <ul className="nav-list-wrap">

                <a 
                    className="nav-link-item" 
                    href="https://www.fox.com/the-simpsons/" 
                    target="_blank">
                
                    <li className="nav-list-item">Los simpsons</li>
                </a>

                <a 
                    className="nav-link-item" 
                    href="https://support.disney.com/hc/es-es" 
                    target="_blank">
                    
                    <li className="nav-list-item">Contacto</li>
                </a>

            </ul>

            <div className="nav-button-wrap">

                <button className="nav-button">Click aquí</button>

            </div>

        </nav>
    );
}
 
export default Header;