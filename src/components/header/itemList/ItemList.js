
const ItemList = (props) => {

    return ( 

    
            <a
                className="nav-link-item"
                href={props.href}
                target="_blank"
                rel="noreferrer">

                <li className="nav-list-item">{props.name}</li>

            </a>

    );
}
 
export default ItemList;