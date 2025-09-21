export default function Card(props) {
    return (
        <div className="Card-Component">
            <img src={props.image} alt="" width="200px"/>
            <h2>{props.location}</h2>
            <p>{props.name}</p>
            <p>{props.rating}</p>
            <p>{props.price}</p>
        </div>
    );
}