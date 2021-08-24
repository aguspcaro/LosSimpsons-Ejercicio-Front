

const FooterList = (props) => {
    
    return ( 

        <div>
            <ul>
                <li 
                    className="footer-list-item">
                    {props.textUno}
                </li>

                <li 
                    className="footer-list-item">
                    {props.textDos}
                </li>
                
                <li 
                    className="footer-list-item">
                    {props.textTres}
                </li>
            </ul>
        </div>
     );
}
 
export default FooterList;