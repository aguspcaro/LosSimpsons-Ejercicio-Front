// componentes
import Logo from "../logo/Logo";

// estilos
import "./Header.css";

// extras
import LogoHeader from "../../assets/paisanosLogoNuevo.svg";
import ItemList from "./itemList/ItemList";

const Header = (props) => {



    return ( 

        <nav className="nav-wrapper">

            <div className="logoHeader">

                <Logo image={LogoHeader} />

            </div>

            <div className="nav-search-wrap">

                {props.children}

            </div>

            <ul className="nav-list-wrap">

                <ItemList 
                    name="Los Simpsons" 
                    href="https://www.fox.com/the-simpsons/" 
                />

                <ItemList 
                    name="Contacto" 
                    href="https://support.disney.com/hc/es-es" 
                />

            </ul>

        </nav>
    );
}
 
export default Header;