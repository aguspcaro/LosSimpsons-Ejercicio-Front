

const Button = () => {
    
    return ( 

        <button 
            className="search-button" 
            type="button"
        >

            <GrTrash onClick={props.deleteSearch}/>

        </button>

    );
}
 
export default Button;