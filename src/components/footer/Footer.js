// componentes
import FooterList from "./footerList/FooterList";
import Logo from "../logo/Logo";

// extras
import LogoFooter from "../../assets/paisanos.svg";

// estilos
import "./Footer.css";

const texto = {
    textUno: "742 Evergreen Terrace",
    textDos: "Springfield",
    textTres: "Tel: 1111-4444"
}
const text = {
    textUno: "Agustin Caro",
    textDos: "QA Analyst",
    textTres: "Aguante Paisanos"
}

const Footer = () => {

    console.log(texto);

    return ( 

        <div className="footer-wrapper">

            <div className="logoFooter">

                <Logo image={LogoFooter} />

            </div>

            <FooterList 
                textUno={texto.textUno} 
                textDos={texto.textDos} 
                textTres={texto.textTres} 
            />

            <FooterList 
                textUno={text.textUno} 
                textDos={text.textDos} 
                textTres={text.textTres} 
            />

        </div>
    );
}

export default Footer;