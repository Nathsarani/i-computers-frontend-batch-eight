export default function ProductCard(props){

    return(
        <div>
            <h1>{props.name}</h1>
            <img src={props.image}/>
            <p>{props.price}</p>

        </div>
    );
}