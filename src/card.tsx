import "./card.css";

interface Props {
    name: string;
    quantity: number;
    price: number;
    openModal: () => void;
}

function Card(props: Props) {
    const { name, quantity, price, openModal} = props;
    const url = `./images/${name.toLowerCase()}.jpg`;
    return (
            <div className="card-wrapper" onClick={openModal}>
                <h3 className="card-name">{name || "drug"}</h3>
                <div className="card-image">
                    <img src={url} alt={name.toLowerCase()} />
                </div>
                <div className="card-detail" >
                    <p>Quantity: {quantity}</p>
                    <p>Price: {price}</p>
                </div>
            </div>
    );

}


export default Card;


