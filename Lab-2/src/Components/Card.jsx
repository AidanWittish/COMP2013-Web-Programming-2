export default function Card(props) {
    return (
        <div className="Card-Component">
            <img src={props.image} alt="" width="200px"/>
            <h2 className="Resort-Location">{props.location}</h2>
            <p className="Resort-Name">{props.name}</p>
            <p>{props.badRating ? <h3 className="Rating-Bad">{props.rating}</h3> : <h3 className="Rating-Good">{props.rating}</h3>}</p>
            <p className="Resort-Price">{props.price}</p>
        </div>
    );
}