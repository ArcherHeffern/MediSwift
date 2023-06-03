import "./card.css";

interface Props {
    name: string;
    quantity: number;
    price: number;
    img: string;
}

function Card(props: Props) {
    const { name, quantity, price, img } = props;
    return (
        <div className="card-grid">
            <div className="card-wrapper">
                <h3 className="card-name">{name || "drug"}</h3>
                <div className="card-image">
                    <img src={img} alt={name} />
                </div>
                <div className="card-detail" >
                    <p>Quantity: {quantity}</p>
                    <p>Price: {price}</p>
                </div>
            </div>
        </div>


    );

}


export default Card;


