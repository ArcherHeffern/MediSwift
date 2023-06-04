import { useState } from "react";
import "./card.css";

interface Props {
    name: string;
    quantity: number;
    price: number;
    isSeller: boolean;
    openModal: (arg0: string) => void;
}

function Card(props: Props) {
    const { name, quantity, price, openModal, isSeller } = props;
    const url = `./images/${name.toLowerCase()}.jpg`;
    const [currentQuantity, setCurrentQuantity] = useState(quantity);
    function incrementQuantity() {
        setCurrentQuantity(currentQuantity + 1);
    }

    function decrementQuantity() {
        if (currentQuantity === 0) return;
        setCurrentQuantity(currentQuantity - 1);
    }
    return (
            <div className="card-wrapper" onClick={() => openModal(name)}>
                <h3 className="card-name">{name || "drug"}</h3>
                <div className="card-image">
                    <img src={url} alt={name.toLowerCase()} />
                </div>
                <div className="card-detail" >
                    <p>Price: {price}</p>
                    {isSeller && <button onClick={incrementQuantity}>Add</button>}
                    <p>Quantity: {currentQuantity}</p>
                    {isSeller && <button onClick={decrementQuantity}>Remove</button>}
                </div>
            </div>
    );

}


export default Card;


