// componente
import ReactLoading from 'react-loading';

const styles = {
    marginBottom:"1em",
    marginTop: "1em",
    width: "10em",
    color: "purple"
}

const Loading = (props) => {

    if(props.loading) {

        return (

            <ReactLoading 
                style={styles} 
                type="bars"
            />
        )

    } else {

        return (

            <hr/>
        )
    }    

}
 
export default Loading;