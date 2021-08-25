// extras
import imgLanding from "../../assets/familia.jpg";

// estilos
import "./Hero.css";

const Hero = () => {

    return ( 

        <div className="hero">

            <div className="hero-content-wrapper">

                <div className="hero-img-wrapper">

                    <img alt="img" src={imgLanding}></img>

                </div>

                <div className="hero-text-wrapper">

                    <div className="hero-title-wrap">

                        <h1>La famalia más famosa del mundo</h1>

                    </div>

                    <div className="hero-text-wrap">

                        <p>Los Simpsons, una familia casi normal! ¿Quieres conocerlos?</p>
                    
                    </div>

                    <div className="hero-button-wrap">

                        <a href="/home" >
                            <button 
                                className="hero-button" 
                                
                            >Click aquí

                            </button>
                        </a>
                        

                    </div>

                </div>

            </div>

        </div>
    );
}
 
export default Hero;